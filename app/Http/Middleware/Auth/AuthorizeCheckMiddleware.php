<?php

namespace App\Http\Middleware\Auth;

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
        if ($request->route()->parameters()['user'] == $request->user()->id) {
            return $next($request);
        }
        return response()->json([
            'message' => 'Mã người dùng không trùng khớp.'
        ],401);
    }
}
