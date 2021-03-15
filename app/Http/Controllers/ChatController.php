<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use  Illuminate\View\View;

class ChatController extends Controller
{
    public function index(Request $request): View{

        $message = $request->get('message', null);

        Redis::publish('chat', json_encode(['message' => $message]));

        return view('chat', ['message' => $message]);

    }
}
