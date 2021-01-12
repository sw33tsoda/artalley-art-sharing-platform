<?php

namespace App\Http\Middleware\Community\ShowcaseArts;

use App\Models\ShowcaseArt;
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
        if (!ShowcaseArt::find($request->route()->parameters()['showcaseArt'])) {
            return response()->json([
                'message' => 'Tài nguyên không tồn tại',
            ],404);

        }

        if (ShowcaseArt::find($request->route()->parameters()['showcaseArt'])->user_id !== $request->user()->id) {
            return response()->json([
                'message' => 'Mã người dùng không khớp.',
            ],401);
        }

        return $next($request);
    }
}
