<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class TokenController extends Controller
{
    function revokeTokenFromAUser(Request $request) {
        $user = User::find($request->id);

        $user->api_token = null;
        if (!$user->save()) {
            return response()->json([
                'message' => 'Xóa Token thất bại',
            ]);
        }

        return response()->json([
            'message' => 'Xóa Token thành công',
        ]);
    }
}
