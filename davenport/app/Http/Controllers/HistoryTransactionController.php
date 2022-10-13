<?php

namespace App\Http\Controllers;

use \App\Models\HistoryTransactionModel;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;

class HistoryTransactionController extends Controller
{
    public function createInvoice(Request $request) {
        $validation = Validator::make($request->all(), [
            'invoice_id' => 'required',
            'user_id' => 'required|exists:users,id',
            'type' => 'required',
            'paid_at' => 'nullable|date',
            'status' => 'required',
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
                $result = HistoryTransactionModel::create([
                    'invoice_id' => $request->invoice_id,
                    'type' => $request->type,
                    'paid_at' => $request->paid_at,
                    'status' => $request->status,
                    'user_id' => $request->user_id,
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

    public function index($id = null) {
        $data = HistoryTransactionModel::where("user_id", '=', $id)->get();
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

    public function updateInvoice(Request $request, $id) {
        $validation = Validator::make($request->all(), [
            'invoice_id' => 'required',
            'user_id' => 'required|exists:users,id',
            'type' => 'required',
            'paid_at' => 'required',
            'status' => 'required',
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
                $result = HistoryTransactionModel::where('history_id', $id);

                if($result) {
                    $result->update([
                        'invoice_id' => $request->invoice_id,
                        'type' => $request->type,
                        'paid_at' => $request->paid_at,
                        'status' => $request->status,
                        'user_id' => $request->user_id,
                    ]);

                    $result = HistoryTransactionModel::where('history_id', $id)->first();

                    return response()->json([
                        'success' => true,
                        'message' => 'Data successfully update',
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
