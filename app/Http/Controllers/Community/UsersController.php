<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Art;
use App\Models\Showcase;
use App\Models\ShowcaseArt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use function PHPUnit\Framework\isEmpty;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        $stats = [
            'artsCount' => Art::where('user_id',$id)->count(),
            'showcasesCount' => Showcase::where('user_id',$id)->count(),
        ];
        $user['stats'] = $stats;

        if (!$user) {
            return response()->json([
                'message' => 'Lấy người dùng thất bại',
            ],500);
        }

        return response()->json([
            'message' => 'Lấy người dùng thành công',
            'user' => $user,
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
        //
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
        $user = User::find($id);

        // Xử lý và lưu ảnh đại diện
        if ($request->deleteProfilePicture == 'true') {
            Storage::delete("/public/profilePictures/$user->profile_picture");
            $user->profile_picture = null;
        } else {
            if ($request->hasFile('profile_picture')) {
                $profilePictureName = $request->file('profile_picture')->hashName();
                $storeProfilePicture = $request->file('profile_picture')->store('/public/profilePictures');
                $user->profile_picture = $profilePictureName;
            }
        }

        // Xử lý và lưu ảnh bìa
        if ($request->deleteBanner == 'true') {
            Storage::delete("/public/banners/$user->banner");
            $user->banner = null;
        } else {
            if ($request->hasFile('banner')) {
                $bannerName = $request->file('banner')->hashName();
                $storeBanner = $request->file('banner')->store('/public/banners');
                $user->banner = $bannerName;
            }
        }

        // Xử lý mật khẩu
        if (!isEmpty($request->password)) {
            $user->password = Hash::make($request->password);
        }

        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->username = $request->username;
        $user->bio = $request->bio;
        $user->twitter = $request->twitter;
        $user->facebook = $request->facebook;
        $user->email = $request->email;

        $save = $user->save();
        if (!$save) {
            response()->json([
                'message' => 'Lưu thất bại'
            ],500);
        }
        
        return response()->json([
            'message' => 'Cập nhật thành công',
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
