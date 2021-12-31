<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContratosController extends Controller
{
    public function vistaContrato()
    {
        return view('contrato');
    }
}
