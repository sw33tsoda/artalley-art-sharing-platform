<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Models\Comment;
use App\Models\Reply;
use App\Models\Art;
use App\Models\ArtChannel;
use App\Models\Dimension;
use App\Models\Showcase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

// use function PHPUnit\Framework\isEmpty;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = User::query();
        $columns = ['id','firstname','lastname','username','email','role','created_at','updated_at'];

        foreach ($columns as $column) {
            // Tìm từng cột
            $query->orWhere($column,'LIKE',"%$request->searchInput%");

            // Tìm theo vai trò (role)
            if (!empty($request->role)) {
                $query->where('role',$request->role);
            }
        }
        // Theo thứ tự
        $list = $query->orderBy('created_at',$request->date)->paginate(10)->onEachSide(1);

        if (!$list) {
            return response()->json([
                'message' => 'Lấy danh sách thất bại',
            ],500);
        }

        return response()->json([
            'list' => $list,
            'message' => 'Lấy danh sách thành công',
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RegisterRequest $request)
    {    
        if (User::where('email',$request->email)->exists()) {
            return response()->json([
                'message' => 'Người dùng đã tồn tại'
            ],500);
        }

        $data = [
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'username' => $request->lastname,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->passsword),
        ];
        
        if ($request->hasFile('profile_picture')) {
            $fileName = $request->file('profile_picture')->hashName();
            $data['profile_picture'] = $fileName;
            $request->file('profile_picture')->store('public/profilePictures');
        }

        $addUser = User::create($data);
        
        if (!$addUser) {
            return response()->json([
                'message' => 'Thêm người dùng thất bại',
            ],500);
        }
        
        return response()->json([
            'message' => 'Thêm người dùng thành công',
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $by_channels = [];
        foreach (ArtChannel::all() as $channel) {
            array_push($by_channels,[
                'name' => $channel->channel_name,
                'slug' => $channel->channel_slug,
                'count' => Art::where('user_id',$id)->where('art_channel_id',$channel->id)->count(),
            ]);
        }

        $by_dimensions = [];
        foreach (Dimension::all() as $dimension) {
            array_push($by_dimensions,[
                'name' => $dimension->dimensional,
                'count' => Art::where('user_id',$id)->where('dimension_id',$dimension->id)->count(),
            ]);
        }

        $user = User::find($id);
        $user['stats'] = [
            'arts' => [
                'total' => Art::where('user_id',$id)->count(),
                'by_channels' => $by_channels,
                'by_dimensions' => $by_dimensions,
            ],
            'showcases' => Showcase::where('user_id',$id)->count(),
            'comments' => Comment::where('user_id',$id)->count() + Reply::where('user_id',$id)->count(),
        ];
        
        return response()->json([
            'user_info' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $getUser = User::find($id);
        if ($getUser) {
            if ($request->hasFile('profile_picture')) {
                if (!is_null($getUser->profile_picture)) {
                    Storage::delete("/public/profilePictures/$getUser->profile_picture");
                }
                $getUser->profile_picture = $request->file('profile_picture')->hashName();
                $request->file('profile_picture')->store('/public/profilePictures');
            }

            if ($request->hasFile('banner')) {
                if (!is_null($getUser->banner)) {
                    Storage::delete("/public/banners/$getUser->banner");
                }
                $getUser->banner = $request->file('banner')->hashName();
                $request->file('banner')->store('/public/banners');
            }
            
            if (is_null($request->password)) {
                $getUser->password = Hash::make($request->password);
            }
            $getUser->firstname = $request->firstname;
            $getUser->lastname = $request->lastname;
            $getUser->username = $request->username;
            $getUser->email = $request->email;
            $getUser->role = $request->role;
            $getUser->facebook = $request->facebook;
            $getUser->twitter = $request->twitter;

            $save = $getUser->save();

            if ($save) {
                return response()->json(['message' => 'Sửa thành công','request' => $request->all()],200);
            }
        }
        return response()->json(['message' => 'Sửa thất bại'],500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $getUser = User::find($id);
        if ($getUser) {
            if (!is_null($getUser->profile_picture)) {
                Storage::delete("/public/profilePictures/$getUser->profile_picture");
            }
            $deleteUser = User::destroy($id);
            if ($deleteUser) {
                return response()->json([
                    'message' => 'Đã xóa',
                ],200);   
            }
        }
        

        return response()->json([
            'message' => 'Xóa thất bại',
        ],500);
    }
}
