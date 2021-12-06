<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EspacioGeneralController extends Controller
{
    public function vistaEspacioGeneral()
    {
        return view('espaciogeneral');
    }
}
