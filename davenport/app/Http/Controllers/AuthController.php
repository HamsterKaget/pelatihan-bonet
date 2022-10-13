<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    // public function construct(Request $request) {
    //     $user = new User([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);
    // }

    public function register(Request $request) {


        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:3',
        ]);

        if($validator->fails()) {
            $error = $validator->errors()->all();
            return response()->json(['message' => 'User has not been registered', 'errors' => $error], 201);
        } else {
            $user = new User([
                'name' => $request->name,
                'role' => $request->role,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $user->save();
            return response()->json(['message' => 'User has been registered'], 201);
        }

    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);

        if($validator->fails()) {
            $error = $validator->errors()->all();
            return response()->json(['message' => 'User has not been registered', 'errors' => $error], 201);
        } else {
            if (!Auth::attempt($credentials)) {
                return response()->json(['message' => 'Unauthorized, Wrong Password or Email'], 404);
            } else {
                $user = User::where('email', '=', $credentials['email'])->firstOrFail();
                $token = $user->createToken('personal_access_tokens')->plainTextToken;
                return response()->json(['message' => 'Login successful new token has been created','personal_access_tokens' => $token, 'user_info' => $user], 200);

            }
        }





    }

}
