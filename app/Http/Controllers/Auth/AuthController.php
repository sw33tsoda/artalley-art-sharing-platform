<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function check(Request $request) {
        return $request->user();
    }
    
    public function register(RegisterRequest $request) {
        // -1   Đăng ký thất bại
        //  0   Email đã có người sử dụng
        //  1   Đăng ký thành công
        if (User::where('email',$request->email)->exists()) {
            return response()->json([
                'register_status' => 0,
                'message' => 'Địa chỉ Email này đã được sử dụng'
            ]);
        }

        $create_user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'username' => $request->username,
            'role' => 'user',
            'password' => Hash::make($request->password),
            'email' => $request->email,
        ]);

        if (!$create_user) {
            return response()->json([
                'register_status' => -1,
                'message' => 'Đăng ký thất bại',
            ]);
        }

        return response()->json([
            'register_status' => 1,
            'message' => 'Đăng ký thành công'
        ]);
    }
    
    public function login(LoginRequest $request) {
        $token = Str::random(60);
        $generateToken = $request->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        if (!$generateToken) {
            return response()->json([
                'login_status' => -1,
                'message' => 'Tạo Token thất bại' 
            ],500);
        }

        return response()->json([
            'login_status' => 1,
            'message' => 'Đăng nhập thành công',
            'user_info' => $request->user(),
        ],200);
    }

    public function logout(Request $request) {
        $removeToken = $request->user()->forceFill([
            'api_token' => NULL,
        ])->save();

        if (!$removeToken) {
            return response()->json([
                'logout_status' => -1,
                'message' => 'Đăng xuất thất bại',
            ],500);
        }

        return response()->json([
            'login_status' => 1,
            'message' => 'Đăng xuất thành công',
        ],200);
    }
}
