<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EspacioGeneralController;
use App\Http\Controllers\FundaEmpresaController;
use App\Http\Controllers\RegistroGEController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerfilUsuarioController;
use App\Http\Controllers\LoginController;

use App\Http\Controllers\EditarGEController;
use App\Http\Controllers\SubirPDFController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\EspacioDeAsesoramientoController;
use App\Http\Controllers\EspacioRevisionController;
use App\Http\Controllers\ForoDudasController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VistaInscritosController;
use App\Http\Controllers\IngresoGEController;
use App\Http\Controllers\GEController;
use App\Http\Controllers\ImpExpController;
use App\Http\Controllers\ContratosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('inicio');

Route::get('/Socio-{id}', [PerfilUsuarioController::class, 'show']);


Route::get('/RegistroGE',[RegistroGEController::class, 'vistaRegistroGE'])->name('registroGE');


Route::get('/Login', [LoginController::class, 'vistaLogin']);

/* Route::get('/GE-{nombre}', [RegistroGEController::class, 'vistaGE']);
Route::get('/GrupoEmpresas', [RegistroGEController::class, 'viewGrupoEmpresas']); */

Route::get('/EditarGE-{nombre}',[EditarGEController::class, 'index_view']);
Route::get('/SubirPDF', [SubirPDFController::class, 'index_view']);
Route::get('/Dudas', [ComentarioController::class, 'index_view']);
Route::get('/GE-{nombre}', [RegistroGEController::class, 'vistaGE']);
Route::get('/GrupoEmpresas', [RegistroGEController::class, 'viewGrupoEmpresas']);


Route::get('/RegistroDeUsuario', [UserController::class, 'crearUsuario']);

Route::get('/FundaEmpresa', [FundaEmpresaController::class, 'vistaFundaEmpresa']);
Route::post('/import-list-excel' ,[FundaEmpresaController::class, 'importExcel'] )   ->name ('users.import.excel');
Route::get('/EspacioGeneral', [EspacioGeneralController::class, 'vistaEspacioGeneral']);

Route::get('/Inscritos', [VistaInscritosController::class, 'index']);

Route::get('/ForoDudas', [ForoDudasController::class, 'VistaForo']);
Route::get('/Debate-{id}', [ForoDudasController::class, 'VistaDebate']);

Route::get('/GEValidas', [GEController::class, 'viewGEValida']);
Route::get('/ValidarGE', [GEController::class, 'viewValidarGE']);
Route::get('/Esp-de-Asesoramiento-{id}', [EspacioDeAsesoramientoController::class, 'viewEspAsesoramiento']);

Route::get('/VentanaAdmin-{id}',[AdminController::class, 'getView']);

Route::get('/ImportarDatos', [ImpExpController::class, 'getView']);

Route::get('/RegitroUsuarioAdmin', [AdminController::class, 'getViewRegister']);
Route::get('/Contrato', [ContratosController::class, 'vistaContrato']);

Route::get('/EspacioRevision', [EspacioRevisionController::class, 'index_view']);
Route::get('/MisInvitaciones', [PerfilUsuarioController::class, 'index_invitaciones']);
Route::get('/prueba', function(){
    return view('notificacion');
});