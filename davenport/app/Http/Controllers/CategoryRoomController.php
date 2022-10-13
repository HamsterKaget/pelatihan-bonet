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
use App\Models\CategoryRoomModel;
use Illuminate\Support\Facades\Validator;

class CategoryRoomController extends Controller
{
    public function __construct()
    {

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->search) {
            $result = CategoryRoomModel::where('category_name', 'LIKE', "%$request->search%")->get();
            return response()->json([
                'success' => true,
                'message' => 'Data has been found.',
                'data' => $result,
                "status_code" => [
                    'status' => 302,
                    'code' => 302,
                ],
            ],302);
        }

        $data = CategoryRoomModel::all();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'category_name' => 'required',
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
            $result = CategoryRoomModel::create([
                'category_name' => $request->category_name,
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
        $result = CategoryRoomModel::where("category_id", '=', $id)->first();
        if($result) {
            return response()->json([
                'success' => true,
                'message' => 'Data found',
                'data' => $result,
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
        $validation = Validator::make($request->all(), [
            'category_name' => 'required',
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
            $result = CategoryRoomModel::where('category_id', '=', $id);
            if($result) {
                $oldResult = CategoryRoomModel::where('category_id', '=', $id)->get();
                $result->update([
                    'category_name' => $request->category_name,
                ]);

                $newResult = CategoryRoomModel::where('category_id', '=', $id)->first();
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
        $result = CategoryRoomModel::where('category_id', '=', $id);
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
