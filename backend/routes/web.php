<?php

use Illuminate\Support\Facades\Route;
//use Illuminate\Support\Facades\Cache;

Route::get('/', function () {
    /* try {
        Cache::set('shyam_mem', "dasari in memcache");
        $val = Cache::get('shyam_mem');
        dump($val);
        dd(Cache::driver());
    } catch (\Throwable $th) {
        dd($th);
        throw $th;
    } */
    return view('welcome');
});
