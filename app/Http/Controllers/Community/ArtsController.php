<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\ArtsRequest;
use App\Models\Art;
// use App\Models\User;
use Illuminate\Http\Request;

class ArtsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userId = $request->user()->id;
        $getArtsListByUserId = Art::where('user_id',$userId)->with('artChannels')->orderBy('created_at','desc')->get();
        if (!$getArtsListByUserId) {
            return response()->json([
                'message' => 'Lấy danh sách thất bại',
            ],500);
        }

        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'list' => $getArtsListByUserId,
        ]);
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
            'message' => 'Hoàn thành',
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
        $getArt = Art::with('users','artChannels','dimensions')->find($id);
        return response()->json([
            'message' => 'Lấy tác phẩm thành công',
            'art' => $getArt,
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
