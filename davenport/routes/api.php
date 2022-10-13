<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\CategoryRoomController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    // Version Api
    'prefix' => 'v1',
], function() {
    Route::group([
        'prefix' => 'auth',
    ], function() {
        Route::post("/login",[AuthController::class, 'login']);
        Route::post("/register",[AuthController::class, 'register']);
        // Route::post('AuthController::class', 'register');
    });

    Route::group([
        // 'prefix' => 'category',
    ], function() {
        Route::resource('/category', CategoryRoomController::class);
    });

    Route::group([
        // 'prefix' => 'room',
    ], function() {
        Route::resource('/room', RoomController::class);
    });

});




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
