<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ArtChannelRequest;
use App\Models\ArtChannel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            ],409);
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
        $photoChange = false;
        
        // Tạo Slug
        $channel_slug = Str::slug($request->channel_name,'-');
        
        // Kiểm tra tài nguyên cần cập nhật đã tồn tại
        $artChannel = ArtChannel::find($id);
        if (!$artChannel) {
            return response()->json([
                'message' => "Mã loại ảnh không tồn tại",
            ],404);
        }  

        // Xử lý File
        if ($request->hasFile('thumbnail')) {
            $oldFileName = $artChannel->thumbnail;
            $newFileName = $request->file('thumbnail')->hashName();
            $saveFile = $request->file('thumbnail')->store("/public/artChannelThumbnails/");
            if (!$saveFile) {
                return response()->json([
                    'message' => "Lưu File thất bại",
                ],500);
            }
            $artChannel->thumbnail = $newFileName;
            Storage::delete("/artChannelThumbnails/$oldFileName");
            $photoChange = true;
        }

        
        // Kiểm tra nếu tên mới có trùng lặp
        if (ArtChannel::where('channel_slug',$channel_slug)->exists()) {
            $saveToData = $artChannel->save();
            $photoChangeMessage = $photoChange ? ", nên chỉ cập nhật ảnh" : "";
            return response()->json([
                'message' => "Tên thể loại đã tồn tại $photoChangeMessage",
            ],200);
        } else {
            $artChannel->channel_name = $request->channel_name;
            $artChannel->channel_slug = $channel_slug;
        }

        // Tiến hành sửa và lưu
        $saveToData = $artChannel->save();
        if (!$saveToData) {
            return response()->json([
                'message' => "Sửa thất bại",
            ],500);
        }
        
        return response()->json([
            'message' => "Sửa thành công",
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
        $getChannel = ArtChannel::find($id);
        if ($getChannel) {
            if (!is_null($getChannel->thumbnail)) {
                Storage::delete("/public/artChannelThumbnails/$getChannel->thumbnail");
            }
            $deleteChannel = ArtChannel::destroy($id);
            if ($deleteChannel) {
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
