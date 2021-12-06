<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IngresoGEController extends Controller
{
    function index_view_solicitar()
    {
        return view('solicitarIngresoGE');
    }
    function index_view_revisar()
    {

        return view('verSolicitudIngresoGE');
    }
}
