<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{



  public function __construct()
  {
    $this->middleware('auth:api',  ['except' => ['register', 'login']]);
  }



  public function login(Request $request)
  {

    // username del form es el email en passport....
    $request->request->add([
      'grant_type'=> 'password',
      'client_id'=> config('services.passport.client_id'),
      'client_secret'=> config('services.passport.client_secret'),
      'email'=> $request->username,
      'password'=> $request->password,
    ]);
    $tokenRequest = Request::create(
      config('services.passport.login_endpoint'), 'post'
    );
    $response = Route::dispatch($tokenRequest);
    return $response;
  }


  public function register(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'fname' => 'required|string|max:255',
      'lname' => 'required|string|max:255',
      'dni' => 'required|string|max:255|unique:users',
      'email' => 'required|email|max:255|unique:users',
      'password' => 'required|string|confirmed|min:6',
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors());
    }
    else {
      return User::create([
        'fname' => $request->fname,
        'lname' => $request->lname,
        'bday' => $request->bday,
        'dni' => $request->dni,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);
    }
  }


  public function logOut()
  {
    auth()->user()->tokens->each(function($token, $key){
      $token->delete();
    });
    return response()->json('Logged out succesfully', 200);
  }




}
