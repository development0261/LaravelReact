<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*Route::get("Item","ItemController@Item");*/
Route::post('/AddItem', [ItemController::class, 'AddItem']);
Route::get('/GetItem', [ItemController::class, 'GetItem']);
Route::post('/EditItem', [ItemController::class, 'EditItem']);