<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
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

}
