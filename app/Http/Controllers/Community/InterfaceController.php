<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Art;
use App\Models\ArtChannel;
use App\Models\Dimension;
use App\Models\Privacy;

class InterfaceController extends Controller
{
    public function uploadSelectList() {
        $artChannelsList = ArtChannel::all();
        $privaciesList = Privacy::all();
        $dimensionsList = Dimension::all();

        $artChannelsSelectList = array_map(function ($channel) {
            return [
                'label' => $channel['channel_name'],
                'value' => $channel['id'],
            ];
        },$artChannelsList->toArray());

        $privaciesSelectList = array_map(function ($privacy) {
            return [
                'label' => $privacy['allowed'],
                'value' => $privacy['id'],
            ];
        },$privaciesList->toArray());

        $dimensionsSelectList = array_map(function ($dimension) {
            return [
                'label' => $dimension['dimensional'],
                'value' => $dimension['id'],
            ];
        },$dimensionsList->toArray());

        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'art_channels' => $artChannelsSelectList,
            'privacies' => $privaciesSelectList,
            'dimensions' => $dimensionsSelectList,
        ],200);
    }

    public function getSlideArts($type) {
        $query = Art::query();
        if ($type == 'latest')
            $list = $query->orderBy('created_at','desc')->take(10)->get();
        else if ($type == 'trending')
            $list = $query->get();
        return response()->json([
            'message' => 'Lấy danh sách tác phẩm mới nhất cho Slide thành công',
            'list' => $list,
        ]);
    }

    public function getDimensionsList() {
        $list = Dimension::all();
        return response()->json([
            'message' => 'Lấy danh sách không gian đa chiều thành công',
            'list' => $list,
        ]);
    }

    public function artsList($dimension) {
        $query = Art::query();
        if ($dimension == 'null')
            $list = $query;
        else
            $list = $query->where('dimension_id',$dimension);
        return response()->json([
            'message' => 'Lấy toàn bộ danh sách tác phẩm thành công',
            'list' => $list->orderBy('created_at','desc')->paginate(12),
            'dimension' => $dimension,
        ]);
    }

}
