<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\ShowcasesRequest;
use App\Models\Showcase;
use App\Models\ShowcaseArt;
use Illuminate\Http\Request;

class ShowcasesController extends Controller
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
    public function store(ShowcasesRequest $request)
    {
        $showcase_data = [
            'title' => $request->title,
            'subheading' => $request->subheading,
            'description' => $request->description,
            'privacy_id' => $request->privacy,
            'art_channel_id' => $request->channel,
            'user_id' => $request->user()->id,
        ];

        $createShowcase = Showcase::create($showcase_data);

        if ($createShowcase) {
            $art_ids = explode(',',$request->art_ids_list);
            $showcase_id = $createShowcase->id;
            $relationships = [];

            foreach ($art_ids as $art_id) {
                array_push($relationships,[
                    'art_id' => (int) $art_id,
                    'showcase_id' => $showcase_id,
                    'user_id' => $request->user()->id,
                    'created_at' => \Carbon\Carbon::now(),
                    'updated_at' => \Carbon\Carbon::now(),
                ]);
            }

            $createRelationships = ShowcaseArt::insert($relationships);

            if (!$createRelationships) {
                return response()->json([
                    'message' => 'Tạo mối quan hệ thất bại',
                ],500);
            }
        } else {
            return response()->json([
                'message' => 'Tạo quày thất bại',
            ],500);
        }
        
        return response()->json([
            'message' => 'Tạo thành công',
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
        $showcase = Showcase::with('showcase_arts.arts')->find($id);
        return response()->json([
            'message' => 'Đã lấy Showcase thành công',
            'showcase' => $showcase,
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
