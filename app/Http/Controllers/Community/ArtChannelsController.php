<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\ArtChannel;
use Illuminate\Http\Request;

class ArtChannelsController extends Controller
{
    public function uploadSelectList() {
        $list = ArtChannel::all();

        $finalList = array_map(function ($channel) {
            return [
                'label' => $channel['channel_name'],
                'value' => $channel['id'],
            ];
        },$list->toArray());

        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'list' => $finalList
        ],200);
    }

}
