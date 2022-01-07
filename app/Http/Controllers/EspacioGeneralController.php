<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use App\Models\Documentacion;
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

    public function registrarDocumento(Request $req){
        $elemento = new Documentacion;
        $elemento->nombre = $req->nombre;
        $file = $req->file('archivo');
        $nombre =  time()."_".$file->getClientOriginalName();
        $file->move('resources/documentos', $nombre);
        $elemento->documento = $nombre;
        $elemento->fecha_creacion = date('Y-m-d H:i:s');

        $elemento->save();

        return response(200);
    }

    public function getDocumentos(){
        $doc = Documentacion::all();
        return response()->json($doc);
    }

    public function borrarDocumento(Request $req){

        $documento = Documentacion::findOrFail($req->idDoc);

        $destinationPath = 'resources/documentos/';
        unlink($destinationPath.$documento->documento);

        $documento->delete();
        return response(200);
    }

    public function borrarAnuncio(Request $req){

        $anuncio = Anuncio::findOrFail($req->idAnuncio);
        $anuncio->delete();
        return response(200);
    }
}
