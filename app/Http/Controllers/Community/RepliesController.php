<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\RepliesRequest;
use App\Models\Reply;
use Illuminate\Http\Request;

class RepliesController extends Controller
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
        $addReply = Reply::create([
            'user_id' => $request->user()->id,
            'comment_id' => $request->comment_id,
            'reply' => $request->reply,
        ]);

        if (!$addReply) {
            return response()->json([
                'message' => 'Trả lời thất bại',
            ]);
        }

        return response()->json([
            'message' => 'Trả lời thành công',
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
    public function update(RepliesRequest $request, $id)
    {
        $editReply = Reply::find($id);
        $editReply->reply = $request->reply;
        $editReply->is_edited = true;
        $save = $editReply->save();
        if (!$save) {
            return response()->json([
                'message' => 'Sửa bình luận thất bại',
            ],500);
        }
        return response()->json([
            'message' => 'Đã sửa bình luận',
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
        Reply::destroy($id);
        return response()->json([
            'message' => 'Đã xóa bình luận'
        ]);
    }
}
