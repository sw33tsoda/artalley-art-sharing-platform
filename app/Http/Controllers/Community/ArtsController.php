<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Http\Requests\Community\ArtsRequest;

class ArtsController extends Controller
{
    public function uploadNewSingleArt(ArtsRequest $artRequest) {

        
        return response()->json([
            'result' => $artRequest->all(),
        ]);
    }
}
