<?php

namespace App\Http\Middleware\Auth;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
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
        if ($request->user()->role !== 'admin') {
            return response()->json([
                'admin_status' => -1,
                'message' => 'Không phải Admin'
            ],401);
        }

        return $next($request);
    }
}
