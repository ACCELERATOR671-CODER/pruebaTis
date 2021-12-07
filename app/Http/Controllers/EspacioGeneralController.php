<?php

namespace App\Http\Controllers;

use App\Models\EspaciGeneral;
use Illuminate\Http\Request;

class EspacioGeneralController extends Controller
{
    public function vistaEspacioGeneral()
    {
        return view('espaciogeneral');
    }
    function RegistroDescripcion(Request $req){
        $Descripcion = new EspaciGeneral;
        $Descripcion -> descripcion = $req -> descripcion;
        $Descripcion ->save();

    }
}
