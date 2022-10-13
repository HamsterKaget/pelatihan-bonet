<?php

namespace App\Http\Controllers;

/*

    {

        "success" : false,
        "message" : "message"
        "data" : {},
        "status code": {
            status: {
                200 - succes
                302 - Found
                400 - Error Parameter
                404 - Error Unavailable / not found
            }
            code: {
                5000 - Invalid Parameter
                5001 - Parameter has an invalid value
                5002 - validation errors
                6001 - Unknown Error
                7001 - item source unavailable
                8001 - Resource not found
            }
        }

    }


*/


use Illuminate\Http\Request;
use App\Models\RoomModel;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->search) {
            $data = RoomModel::where('room_name', 'LIKE', "%$request->search%")->get();
            return response()->json(['success' => true,'message' => 'Data has been found.',
                'data' => $data,
                "status_code" => [
                    'status' => 302,
                    'code' => 302,
                ],
            ],302);
        }

        $data = RoomModel::all();
        return response()->json([
            'success' => true,
            'message' => 'All data successfully sent.',
            'data' => $data,
            "status_code" => [
                'status' => 200,
                'code' => 200,
            ],
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    public function cekCategoryName($request) {
        $data = DB::table('category_room')->where('category_id', '=', $request)->first();

        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validation =  Validator::make($request->all(), [
            'room_name' => 'required',
            'room_short_description' => 'required',
            'room_description' => 'nullable',
            'room_image' => 'nullable',
            'room_price' => 'required|numeric',
            'room_stock' => 'required|integer',
            'category_id' => 'required',
        ]);

        if($validation->fails()) {
            $errors = $validation->errors()->all();
            return response()->json([
                'success' => false,
                'message' => 'Error Validation',
                'data' => $errors,
                "status_code" => [
                    'status' => 400,
                    'code' => 5002,
                ],
            ],400);

        } else {

            try {
                // dd( $category_name = $this->cekCategoryName($request->category_id));

                $result = RoomModel::create([
                    'room_name' => $request->room_name,
                    'room_short_description' => $request->room_short_description,
                    'room_description' => $request->room_description,
                    'room_image' => $request->room_image,
                    'room_price' => $request->room_price,
                    'room_stock' => $request->room_stock,
                    'category_id' => $request->category_id,
                ]);



                if($result) {
                    return response()->json([
                        'success' => true,
                        'message' => 'Data successfully stored',
                        'data' => $result,
                        "status_code" => [
                            'status' => 200,
                            'code' => 200,
                        ],
                    ],200);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'Data unsuccessful stored',
                        'data' => null,
                        "status_code" => [
                            'status' => 404,
                            'code' => 6001,
                        ],
                    ],404);
                }
            } catch (QueryException $ex) {
                return response()->json([
                    'success' => false,
                    'message' => 'There is no foreign key with that id',
                    'data' => $ex,
                    "status_code" => [
                        'status' => 404,
                        'code' => 6001,
                    ],
                ],404);
            }



        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $result = RoomModel::where("category_id", '=', $id)->first();
        if($result) {
            return response()->json([
                'success' => true,
                'message' => 'Data found',
                'data' => [$result, $this->cekCategoryName($result->category_id)],
                "status_code" => [
                    'status' => 200,
                    'code' => 200,
                ],
            ],200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validation =  Validator::make($request->all(), [
            'room_name' => 'required',
            'room_short_description' => 'required',
            'room_description' => 'nullable',
            'room_image' => 'nullable',
            'room_price' => 'required|numeric',
            'room_stock' => 'required|integer',
            'category_id' => 'required',
        ]);

        if($validation->fails()) {
            $errors = $validation->errors()->all();
            return response()->json([
                'success' => false,
                'message' => 'Error Validation',
                'data' => $errors,
                "status_code" => [
                    'status' => 400,
                    'code' => 5002,
                ],
            ],400);
        } else {
            try {
                $result = RoomModel::where('room_id', '=', $id);
                if($result) {
                    $oldResult = RoomModel::where('room_id', '=', $id)->first();
                    $result->update([
                        'room_name' => $request->room_name,
                        'room_short_description' => $request->room_short_description,
                        'room_description' => $request->room_description,
                        'room_image' => $request->room_image,
                        'room_price' => $request->room_price,
                        'room_stock' => $request->room_stock,
                        'category_id' => $request->category_id
                    ]);
                    $newResult = RoomModel::where('room_id', '=', $id)->first();

                    return response()->json([
                        'success' => true,
                        'message' => 'Data has been Update',
                        'data' => [
                            'data_new' => $newResult,
                            'data_old' => $oldResult,
                        ],
                        "status_code" => [
                            'status' => 200,
                            'code' => 200,
                        ],
                    ],200);
                }
            }catch (QueryException $ex) {
                return response()->json([
                    'success' => false,
                    'message' => 'There is no foreign key with that id',
                    'data' => $ex,
                    "status_code" => [
                        'status' => 404,
                        'code' => 6001,
                    ],
                ],404);
            }


        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = RoomModel::where('room_id', '=', $id);
        if($result) {
            $result->delete();
            return response()->json([
                'success' => true,
                'message' => 'Data has been delete',
                "status_code" => [
                    'status' => 200,
                    'code' => 200,
                ],
            ],200);
        }
    }
}
