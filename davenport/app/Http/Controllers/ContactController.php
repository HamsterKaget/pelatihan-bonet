<?php

namespace App\Http\Controllers;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function contact(Request $request) {
        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
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
                $result = ContactModel::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'message' => $request->message
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
                }
            } catch (QueryException $ex) {
                return response()->json([
                    'success' => false,
                    'message' => 'Errors',
                    'data' => $ex,
                    "status_code" => [
                        'status' => 404,
                        'code' => 6001,
                    ],
                ],404);
            }
        }
    }
}
