<?php

namespace App\Http\Controllers;

use App\Models\FundaEmpresa;
use Illuminate\Http\Request;
use \PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use \PhpOffice\PhpSpreadsheet\Writer\Csv;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;

class ImpExpController extends Controller
{
    public function importarExelUsuarios(Request $req){
        $file = $req->file('exel');
        $nombre =  time()."_".$file->getClientOriginalName();
        $file->move('doc', $nombre);

        $reader = new Xlsx();
        $spreadsheet = $reader->load('doc/'.$nombre);

        $loadedSheetNames = $spreadsheet->getSheetNames();

        $writer = new Csv($spreadsheet);

        foreach($loadedSheetNames as $sheetIndex => $loadedSheetName) {
            $writer->setSheetIndex($sheetIndex);
            $writer->save('doc/'.$loadedSheetName.'.csv');
        }

        unlink('doc/'.$nombre);
        $lines = file('doc/'.$loadedSheetName.'.csv');
        $array = array_map('str_getcsv', $lines);
        //0 = codigo, 1= codigosis, 2 = nombre, 3 = correo, 4= carrera 5=grupo, 
        $rol = DB::table('Rol')
                    ->where('nombreRol', '=', 'Estudiante')
                    ->first();
        for ($i=0; $i < sizeof($array); $i++) { 
            if(is_numeric($array[$i][0])){
                $estudiante = DB::table('Usuario')
                                ->where('codSis', '=',$array[$i][1])
                                ->first();
                if(!isset($estudiante->idUsuario)){
                    $user = new Usuario;
                    $user->idUsuario = intval($array[$i][1]);
                    $user->nombreC = $array[$i][2];
                    $user->email = $array[$i][3];
                    $user->codSis = intval($array[$i][1]);
                    $user->idGrupo = intval($array[$i][5]);
                    $user->idCarrera = intval($array[$i][4]);
                    $user->idRol = $rol->idRol;

                    $user->save();
                    
                }
            }
        }
        unlink('doc/'.$loadedSheetName.'.csv');
        return response()->json($array);
    }

    public function importarExelEmpresas(Request $req){
        $file = $req->file('exel');
        $nombre =  time()."_".$file->getClientOriginalName();
        $file->move('doc', $nombre);

        $reader = new Xlsx();
        $spreadsheet = $reader->load('doc/'.$nombre);

        $loadedSheetNames = $spreadsheet->getSheetNames();

        $writer = new Csv($spreadsheet);

        foreach($loadedSheetNames as $sheetIndex => $loadedSheetName) {
            $writer->setSheetIndex($sheetIndex);
            $writer->save('doc/'.$loadedSheetName.'.csv');
        }

        unlink('doc/'.$nombre);
        $lines = file('doc/'.$loadedSheetName.'.csv');
        $array = array_map('str_getcsv', $lines);
        //0 = nombre corto, 1 = nombre Largo, 2 = gestion 3 = docente 
        DB::table('funda_empresas')
                ->delete();
        for ($i=0; $i < sizeof($array); $i++) { 
                if((strlen($array[$i][0]) > 0) && 
                    ($array[$i][0] != 'FundaEmpresa TIS') && 
                        ($array[$i][0] != 'Nombre corto')){
                    $funda = new FundaEmpresa;
                    $funda->nombreCorto = $array[$i][0];
                    $funda->nombreLargo = $array[$i][1];
                    $funda->gestion = $array[$i][2];
                    $funda->docente = $array[$i][3];

                    $funda->save();
                }
        }
        //unlink('doc/'.$loadedSheetName.'.csv');
        return response()->json($array);
    }

    public function getView(){
        return view('impexp');
    }
}
