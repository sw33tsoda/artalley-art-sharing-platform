<?php

namespace App\Http\Middleware\Community\Arts;

use App\Models\Art;
use Closure;
use Illuminate\Http\Request;

class AuthorizeCheckMiddleware
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
        if (!Art::find($request->route()->parameters()['art'])) {
            return response()->json([
                'message' => 'Tài nguyên không tồn tại',
            ],404);

        }

        if (Art::find($request->route()->parameters()['art'])->user_id !== $request->user()->id) {
            return response()->json([
                'message' => 'Mã người dùng không khớp.',
            ],401);
        }

        return $next($request);
    }
}
