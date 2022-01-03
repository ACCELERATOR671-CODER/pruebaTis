<?php

namespace App\Http\Controllers;

use App\Models\EspaciGeneral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EspacioGeneralController extends Controller
{
    public function vistaEspacioGeneral()
    {
        return view('espaciogeneral');
    }
    function RegistroDescripcion(Request $req){
        $Descripcion = new EspaciGeneral;

        $Descripcion -> idEspAse = $req -> idEsp;
        $Descripcion -> descripcion = $req -> desc;
        $Descripcion ->save();

        $descip = DB::table ('espaci_generals')
                    ->where ('espaci_generals.idEspAse', '=' , $Descripcion->id)
                    ->where ('espaci_generals.descripcion','=',$Descripcion->desc)
                    ->first();
        return response ()->json($Descripcion);
    }
}
