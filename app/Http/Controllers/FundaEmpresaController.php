<?php

namespace App\Http\Controllers;
use App\Models\FundaEmpresa;
use App\Imports\fundaempresaImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class FundaEmpresaController extends Controller
{
    public function vistaFundaEmpresa()
    {
        return view('fundaEmpresa');
    }
    public function importExcel(Request $request)
    {
        $file = $request->file('file');
        Excel::import(new fundaempresaImport, $file);

        return back()->with('message','Importacion de usuarios completada');
    }
}
