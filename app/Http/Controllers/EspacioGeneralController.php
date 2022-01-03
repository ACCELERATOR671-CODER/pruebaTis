<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
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
        $descripcion = EspaciGeneral::findOrFail(1);

        $descripcion->descripcion = $req->descripcion;
        $descripcion->save();
        return response(200);
    }

    public function getDescripcion(){
        $descripcion = EspaciGeneral::findOrFail(1);
        return response()->json($descripcion);
    }

    /*
        anuncio
    */

    public function registrarAnuncio(Request $req){
        $anuncio = new Anuncio;
        $anuncio->anuncio = $req->anuncio;
        $anuncio->fecha_creacion = date('Y-m-d H:i:s');

        $anuncio->save();
        return response(200);
    }

    public function getAnuncios(){
        $anuncios = Anuncio::all();
        return response()->json($anuncios);
    }
}
