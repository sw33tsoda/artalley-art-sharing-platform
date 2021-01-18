<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\CommentsRequest;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;

class CommentsController extends Controller
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
        $addComment = Comment::create([
            'user_id' => $request->user()->id,
            'art_id' => $request->art_id,
            'comment' => $request->comment,
        ]);

        if (!$addComment) {
            return response()->json([
                'message' => 'Gửi bình luận thất bại',
            ]);
        }

        return response()->json([
            'message' => 'Gửi bình luận thành công',
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
    public function update(CommentsRequest $request, $id)
    {
        $editComment = Comment::find($id);
        $editComment->comment = $request->comment;
        $editComment->is_edited = true;
        $save = $editComment->save();
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
        Reply::where('comment_id',$id)->delete();
        Comment::destroy($id);
        return response()->json([
            'message' => 'Đã xóa bình luận',
        ],200);
    }
}
