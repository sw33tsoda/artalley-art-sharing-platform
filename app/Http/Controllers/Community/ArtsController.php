<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\ArtsRequest;
use App\Http\Requests\Community\EditArtRequest;
use App\Models\Art;
use App\Models\ArtChannel;
use App\Models\Dimension;
use App\Models\Privacy;
use App\Models\Showcase;
use App\Models\ShowcaseArt;
// use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArtsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $getArtsListByUserId = Art::where('user_id', $request->user()->id)->with('artChannels')->orderBy('created_at','desc')->paginate(12);
        if (!$getArtsListByUserId) {
            return response()->json([
                'message' => 'Lấy danh sách thất bại',
            ],500);
        }

        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'list' => $getArtsListByUserId,
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
    public function store(ArtsRequest $request)
    {
        $userId = $request->user()->id;
        $data = [
            'title' => $request->title,
            'caption' => $request->caption,
            'description' => $request->description,
            'art' => $request->file('art')->hashName(),
            'tags' => $request->tags,
            'privacy_id' => $request->privacy,
            'dimension_id' => $request->dimensional,
            'art_channel_id' => $request->channel,
            'user_id' => $userId,
            'showcase_id' => null,
        ];

        $addArt = Art::create($data);

        if ($addArt) {
            $saveFile = $request->file('art')->store("public/community/{$userId}/arts");
            if (!$saveFile) {
                return response()->json([
                    'message' => 'Lưu ảnh thất bại',
                ],500);
            }
        } else {
            return response()->json([
                'message' => 'Thêm ảnh thất bại',
            ],500);
        }

        return response()->json([
            'message' => 'Đã thêm ảnh',
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
        return response()->json([
            'message' => 'Lấy tác phẩm thành công',
            'art' => (function($id){
                // Lấy ảnh
                $getArt = Art::with([
                    'users',
                    'artChannels',
                    'dimensions',
                    'showcase_arts' => function ($query) {
                        $query->with(['showcases.showcase_arts.arts' => function ($showcases_query) {
                            // $showcases_query->take(3);
                        },'arts' => function($arts_query) {
                            // $arts_query->take(1);
                        }])->orderBy('created_at','desc')->get();
                    },
                ])->find($id);
                
                // Số lượng showcase chứa tác phẩm này.
                $getArt['total_showcases'] = ShowcaseArt::where('art_id',$id)->count();
                return $getArt;
            })($id),
            'channelSelectList' => ArtChannel::all(),
            'privacySelectList' => Privacy::all(),
            'dimensionSelectList' => Dimension::all(),
        ],200);
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
    public function update(EditArtRequest $request, $id)
    {
        $art = Art::find($id);
        $art->title = $request->title;
        $art->caption = $request->caption;
        $art->description = $request->description;
        $art->art_channel_id = $request->channel;
        $art->dimension_id = $request->dimensional;
        $art->privacy_id = $request->privacy;
        $art->tags = $request->tags;

        $save = $art->save();

        if (!$save) {
            return response()->json([
                'message' => 'Cập nhật thất bại',
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
        $art = Art::find($id);
        try {
            ShowcaseArt::where('art_id',$id)->delete();
            Storage::delete("/public/community/{$art->user_id}/arts/{$art->art}");
            Art::destroy($id);
        } catch (\Throwable $e) {
            report($e);
            return response()->json([
                'message' => 'Lỗi xóa'
            ],500);
        }       
        return response()->json([
            'message' => 'Xóa thành công',
        ],200);
    }
}
