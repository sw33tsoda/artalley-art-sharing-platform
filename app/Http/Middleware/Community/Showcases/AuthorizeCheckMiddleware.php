<?php

namespace App\Http\Middleware\Community\Showcases;

use App\Models\Showcase;
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
        if (!Showcase::find($request->route()->parameters()['showcase'])) {
            return response()->json([
                'message' => 'Tài nguyên không tồn tại',
            ],404);

        }

        if (Showcase::find($request->route()->parameters()['showcase'])->user_id !== $request->user()->id) {
            return response()->json([
                'message' => 'Mã người dùng không khớp.',
            ],401);
        }

        return $next($request);
    }
}
