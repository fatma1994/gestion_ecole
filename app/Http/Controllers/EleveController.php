<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EleveController extends Controller
{
    public function show($id){
        return 'je suis eleve $id';
    }
}
