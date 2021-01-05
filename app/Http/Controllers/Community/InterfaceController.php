<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Art;
use App\Models\ArtChannel;
use App\Models\Dimension;
use App\Models\Privacy;
use Illuminate\Broadcasting\Channel;

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

    public function getFiltersList() {
        $dimensionsList = Dimension::all();
        $channelsList = ArtChannel::all();
        return response()->json([
            'message' => 'Lấy danh sách không gian đa chiều thành công',
            'dimensionsList' => $dimensionsList,
            'channelsList' => $channelsList,
        ]);
    }

    public function artsList($dimension_id,$channel_id) {
        $query = Art::query();
        $list = $query;
        if (!($dimension_id == 'null')) {
            $list->where('dimension_id',$dimension_id);
        }

        // Kiểm tra channel_id
        if (!($channel_id == 'null')) {
            $list->where('art_channel_id',$channel_id);
        }

        return response()->json([
            'message' => 'Lấy toàn bộ danh sách tác phẩm thành công',
            'list' => $list->orderBy('created_at','desc')->paginate(12),
        ]);
    }

}
