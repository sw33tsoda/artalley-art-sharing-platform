<?php

namespace App\Http\Middleware\Auth;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $credentials = $request->only('email','password');
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'login_status' => 0,
                'message' => 'Thông tin đăng nhập không đúng',
            ],401);
        }
        
        return $next($request);
    }
}
