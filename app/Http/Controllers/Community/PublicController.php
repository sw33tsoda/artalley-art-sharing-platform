<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Art;
use App\Models\ArtChannel;
use App\Models\Comment;
use App\Models\Dimension;
use App\Models\Privacy;
use App\Models\Showcase;
use App\Models\ShowcaseArt;
use App\Models\User;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function getUserProfile($user_id) {
        $user = User::find($user_id);
        if (!$user) {
            return response()->json([
                'message' => 'Người này không tồn tại',
            ],500);
        }
        $stats = [
            'artsCount' => Art::where('user_id',$user_id)->count(),
            'showcasesCount' => Showcase::where('user_id',$user_id)->count(),
        ];
        $user['stats'] = $stats;


        return response()->json([
            'message' => 'Lấy người dùng thành công',
            'user' => $user,
        ]);
    }

    public function getArtById($id) {
        return response()->json([
            'message' => 'Lấy tác phẩm thành công',
            'art' => (function() use ($id) {
                // Lấy ảnh
                $getArt = Art::with([
                    'users',
                    'artChannels',
                    'dimensions',
                    'showcase_arts' => function ($query) {
                        $query->with(['showcases.showcase_arts.arts' => function ($showcases_query) {
                            // $showcases_query->take(3);
                        },'arts' => function($arts_query) {
                            // $arts_query->take(1);
                        }])->orderBy('created_at','desc')->get();
                    },
                ])->find($id);
                
                // Số lượng showcase chứa tác phẩm này.
                $getArt['total_showcases'] = ShowcaseArt::where('art_id',$id)->count();
                return $getArt;
            })(),
            'channelSelectList' => ArtChannel::all(),
            'privacySelectList' => Privacy::all(),
            'dimensionSelectList' => Dimension::all(),
        ],200);
    }

    
    public function getArtsList($dimension_id,$channel_id) {
        $query = Art::query();
        $list = $query;
        if (!($dimension_id == 'null')) {
            $list->where('dimension_id',$dimension_id);
        }

        // Kiểm tra channel_id
        if (!($channel_id == 'null')) {
            $list->where('art_channel_id',$channel_id);
        }

        return response()->json([
            'message' => 'Lấy toàn bộ danh sách tác phẩm thành công',
            'list' => $list->orderBy('created_at','desc')->paginate(12),
        ]);
    }

    public function getArtsListByUserId($user_id) {
        $list = Art::where('user_id', $user_id)->with('artChannels')->orderBy('created_at','desc')->paginate(12);
        if (!$list) {
            return response()->json([
                'message' => 'Lấy danh sách thất bại',
            ],500);
        }

        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'list' => $list,
        ]);
    }

    public function getShowcasesListByUserId($user_id) {
        return response()->json([
            'message' => 'Lấy danh sách thành công',
            'list' => (function() use ($user_id) {
                $list = Showcase::where('user_id',$user_id)->with(['showcase_arts' => function($query) {
                    $query->inRandomOrder()->with('arts');
                }])->orderBy('created_at','desc')->get(); 
                return $list;
            })(),
        ],200);
    }

    public function getShowcaseById($id) {
        return response()->json([
            'message' => 'Đã lấy Showcase thành công',
            'showcase' => Showcase::with('showcase_arts.arts.artChannels','showcase_arts.arts.dimensions','users')->find($id),
            'channelSelectList' => ArtChannel::all(),
            'privacySelectList' => Privacy::all(),
        ],200);
    }

    public function getSlideArtsList($type) {
        $query = Art::query();
        if ($type == 'latest')
            $list = $query->orderBy('created_at','desc')->take(10)->get();
        else if ($type == 'trending')
            $list = $query->get();
        return response()->json([
            'message' => 'Lấy danh sách tác phẩm mới nhất cho Slide thành công',
            'list' => $list,
        ]);
    }

    public function getCommentsListByArtId($art_id) {
        return response()->json([
            'message' => 'Lấy danh sách bình luận thành công',
            'list' => Comment::with(['users','replies' => function($replies_query) {
                $replies_query->with('users')->get();
            }])->where('art_id',$art_id)->orderBy('created_at','desc')->paginate(10),
        ],200);
    }

    public function search($keywords,$type) {
        $result = null;

        switch ($type) {
            case 'art':
                $result = Art::query();
                foreach (['title','caption','description','tags'] as $column) {
                    $result->orWhere($column,'LIKE',"%$keywords%");
                }
                break;
        
            case 'showcase':
                $result = Showcase::query();
                foreach (['title','subheading','description'] as $column) {
                    $result->orWhere($column,'LIKE',"%$keywords%");
                }
                break;

            case 'user':
                $result = User::query();
                foreach (['username','firstname','lastname','facebook','twitter','email'] as $column) {
                    $result->orWhere($column,'LIKE',"%$keywords%");
                }
                break;
            default:
                break;
        }

        return response()->json([
            'result' => $result->get(),
        ]);
    }
}
