<?php

namespace App\Http\Controllers;

use App\Models\Elemento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use File;

class EspacioDeAsesoramientoController extends Controller
{
    public function viewEspAsesoramiento($id){
        return view('espacioDeAsesoramiento')->with(compact('id'));
    }
    /*
        nombreGE
    */
    public function obtenerCarpetasBasicas(Request $req){
        $GE = DB::table('Grupo_Empresa')
                    ->where('nombre', '=', $req->nombreGE)
                    ->first();
        $carpetas = DB::table('Elemento')
                            ->where('idGE', '=', $GE->idGE)
                            ->whereNull('idPadre')
                            ->get();
        $arbolDatos = $this->buscarHijos($carpetas);
        return response()->json($arbolDatos);
    }

    private function buscarHijos($datos){
        $response = [];
        foreach ($datos as $key) {
            array_push($response, $this->appendHijos($key));
        }
        return $response;
    }

    private function appendHijos($datos){
        $hijos = DB::table('Elemento')
                        ->where('idPadre', '=',$datos->idElemento)
                        ->orderBy('tipo')
                        ->get();
        
        if(!empty($hijos)){
            $hijosHijos = $this->buscarHijos($hijos);
            $dato = ((array) $datos);
            $dato['hijos'] = $hijosHijos;
            return (Object)$dato; 
        }   

        return $datos;
    }

    /*
        nombre: nombre del elemento
        link: link del elemento
        tipo: tipo de elemento
        idPadre : id del padre
        nombreGE: grupo empresa dueña del elemento
    
        
        */
    //OBJETIVOS
        //QUE LIMPIE LOS CAMPOS------
        //que reprodusca los pdfs
    public function crearElemento(Request $req){
        $item = DB::table('Elemento')
                        ->where('nombre', '=', $req->nombre)
                        ->where('idPadre', '=', $req->idPadre)
                        ->first();

        if(!isset($item->idElemento)){
            $ge = DB::table('Grupo_Empresa')
                        ->where('nombre' , '=', $req->nombreGE)
                        ->first();

            if(isset($ge->idGE)){
                $elemento = new Elemento;
                $elemento->nombre = $req->nombre;
                
                $elemento->tipo = $req->tipo;
                $elemento->idPadre = $req->idPadre;
                $elemento->idGE = $ge->idGE;

                if($elemento->tipo == 'pdf'){
                    $file = $req->file('link');
                    $nombre =  time()."_".$file->getClientOriginalName();
                    $file->move('resources/documentos', $nombre);
                    $elemento->link = $nombre;
                } else {
                    $elemento->link = $req->link;
                }

                $elemento->save();
                $req = DB::table('Elemento')
                        ->where('nombre', '=', $elemento->nombre)
                        ->where('idPadre' , '=', $elemento->idPadre)
                        ->where('idGE', '=', $elemento->idGE)
                        ->first();
                return response()->json($req);
            } else {
                return response()->json(['mensaje' => 'Grupo empresa no encontrada']);
            }
            
        } else {
            return response()->json(["mensaje" => "Ya existe otro elemento con el mismo nombre en la carpeta"]);
        }
    }

    public function eliminarElemento(Request $req){
        $elemento = Elemento::find($req->idElemento);

        if($elemento->tipo == 'pdf'){
            $destinationPath = 'resources/documentos/';
            unlink($destinationPath.$elemento->link);
        }

        $elemento->delete();
        return response(200);
    }
}
