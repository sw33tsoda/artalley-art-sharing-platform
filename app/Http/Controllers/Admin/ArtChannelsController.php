<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ArtChannelRequest;
use App\Models\ArtChannel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ArtChannelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = ArtChannel::query();
        $columns = ['id','channel_name','channel_slug','created_at'];

        foreach($columns as $column) {
            // Tìm từng cột
            $query->orWhere($column,'LIKE',"%$request->searchInput%");
        }
        // Thứ tự
        $list = $query->orderBy('created_at',$request->date)->paginate(16)->onEachSide(1);  

        if (!$list) {
            response()->json([
                'Lấy danh sách thất bại',
            ],500);
        }

        return response()->json([
            'list' => $list,
        ],200);
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
    public function store(ArtChannelRequest $request)
    {
        
        // Tạo Slug
        $channel_slug = Str::slug($request->channel_name,'-');

        // Kiểm tra nếu đã tồn tại
        if (ArtChannel::where('channel_name',$request->channel_name)->orWhere('channel_slug',$channel_slug)->exists()) {
            return response()->json([
                'message' => "[$request->channel_name] đã tồn tại"
            ],500);
        }

        // Data đợi để lưu vào Database
        $data = [
            'channel_name' => $request->channel_name,
            'channel_slug' => Str::slug($request->channel_name,'-'),
        ];

        // Xử lý File
        if ($request->hasFile('thumbnail')) {
            $fileName = $request->file('thumbnail')->hashName();
            $data['thumbnail'] = $fileName;
            $saveFile = $request->file('thumbnail')->store('/public/artChannelThumbnails');
            if (!$saveFile) {
                return response()->json([
                    'message' => "Lưu File thất bại",
                ],500);
            }
        }

        // Tiến hành lưu vào Database
        $createChannel = ArtChannel::create($data);

        if (!$createChannel) {
            return response()->json([
                'message' => "Tạo [$request->channel_name] thất bại",
            ],500);
        }

        return response()->json([
            'message' => "Tạo [$request->channel_name] thành công",
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
        //
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
        //
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
