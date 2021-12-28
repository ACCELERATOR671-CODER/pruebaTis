<?php

use App\Http\Controllers\CalendarioController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EditarGEController;
use App\Http\Controllers\EditarPerfilController;
use App\Http\Controllers\EspacioDeAsesoramientoController;
use App\Http\Controllers\EspacioGeneralController;
use App\Http\Controllers\EspacioRevisionController;
use App\Http\Controllers\ForoDudasController;
use App\Http\Controllers\NavegadorController;
use App\Http\Controllers\RegistroGEController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerfilUsuarioController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VistaInscritosController;
use App\Http\Controllers\GEController;
use App\Http\Controllers\ImpExpController;
use App\Http\Controllers\NotificacionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('usuario',[PerfilUsuarioController::class ,'obtenerUsuario']);
Route::post('usuarios',[PerfilUsuarioController::class ,'obtenerUsuarios']);
Route::post('actualizarPerfil',[EditarPerfilController::class ,'modificarDatos']);

Route::post('nombreGE', [RegistroGEController::class, 'verificarNombre']);
Route::post('registrarGrupoEmpresa', [RegistroGEController::class, 'RegistrarGrupoEmpresa'])->name('rgep');

Route::post('crearSession', [UserController::class, 'createSession']);
Route::post('eliminarSession', [UserController::class, 'dropSession']);
Route::post('verificarSession', [UserController::class, 'verifySession']);
Route::post('verificarSessionConsultor', [UserController::class, 'verifySessionConsultor']);
Route::post('getNombre', [UserController::class, 'getNombre']);

Route::post('registrarCambiosGE', [EditarGEController::class, 'registrarCambiosGE']);
//Route::post('registrarCambiosGE', [RegistroGEController::class, 'RegistrarGrupoEmpresa']);
Route::post('solicitarGE', [EditarGEController::class, 'solicitarGE']);

Route::post('solicitarSocios', [RegistroGEController::class, 'obtenerSocios']);
Route::post('expulsarUsuario', [RegistroGEController::class, 'expulsarSocio']);
Route::post('obtenerUsuariosG', [RegistroGEController::class, 'obtenerUsuariosG']);

Route::post('mandarInvitacion', [UserController::class, 'mandarInvitacion']);
Route::post('obtenerPendientes', [RegistroGEController::class, 'obtenerPendientes']);
Route::post('eliminarInvitacion', [RegistroGEController::class, 'eliminarInvitacion']);

Route::post('obtenerGrupoEmpresas', [RegistroGEController::class, 'obtenerGrupoEmpresas']);

Route::post('actualizarUsuario', [UserController::class, 'actualizarUsuario']);
Route::post('obtenerInvitaciones',[PerfilUsuarioController::class, 'obtenerInvitaciones']);
Route::post('aceptarInvitacion',[PerfilUsuarioController::class, 'aceptarInvitacion']);
Route::post('rechazarInvitacion',[PerfilUsuarioController::class, 'rechazarInvitacion']);
Route::post('import-list-excel' ,[FundaEmpresaController::class, 'importExcel'] )   ->name ('users.import.excel');
Route::get('obtenerDatosFE', [UserController::class,'obtenerDatosFE']);

Route::post('getUsuariosMismoGrupo',[VistaInscritosController::class, 'getUsuariosMismoGrupo']);

Route::post('puedeVerSolicitudes', [UserController::class, 'puedeVerSolicitudes']);
Route::post('tieneSolicitudes', [UserController::class, 'tieneSolicitudes']);

Route::post('obtenerSolicitudes', [RegistroGEController::class, 'obtenerSolicitudes']);

Route::post('registrarDebate', [ForoDudasController::class , 'registrarDebate']);
Route::get('obtenerDebates', [ForoDudasController::class, 'obtenerDebates']);

Route::post('obtenerMensajes', [ForoDudasController::class, 'obtenerMensajes']);
Route::post('obtenerDebate', [ForoDudasController::class, 'obtenerDebate']);
Route::post('registrarMensaje', [ForoDudasController::class, 'registrarMensaje']);

Route::post('obtenerCarpetasBasicas', [EspacioDeAsesoramientoController::class, 'obtenerCarpetasBasicas']);

Route::post('obtenerGrupoEmpresasValidas', [GEController::class, 'obtenerGrupoEmpresasValidas']);
Route::post('obtenerTodasGrupoEmpresas', [GEController::class, 'obtenerTodasGrupoEmpresas']);
Route::post('validarGrupoEmpresas', [GEController::class, 'validarGrupoEmpresas']);

Route::post('agregarEvento',[CalendarioController::class, 'agregarEvento']);
Route::post('obtenerEventos',[CalendarioController::class, 'obtenerEventos']);
Route::post('editarEvento', [CalendarioController::class, 'editarEvento']);
Route::post('quitarEvento', [CalendarioController::class, 'quitarEvento']);
Route::post('crearElemento', [EspacioDeAsesoramientoController::class, 'crearElemento']);
Route::post('eliminarElemento',[EspacioDeAsesoramientoController::class, 'eliminarElemento']);

Route::post('obtenerDatosGrupoEmpresa', [RegistroGEController::class, 'obtenerDatosGrupoEmpresa']);

Route::post('elegirNavegador', [NavegadorController::class, 'elegirNavegador']);

Route::post('actualizarRol', [AdminController::class, 'actualizarRol']);
Route::post('resetear', [AdminController::class, 'resetear']);
Route::get('getUsuarios', [AdminController::class, 'getUsuarios']);
Route::post('registrarDescrip', [EspacioGeneralController::class, 'RegistroDescripcion']);
Route::post('getFullUser', [AdminController::class, 'getFullUser']);

Route::post('importarExelUsuarios', [ImpExpController::class, 'importarExelUsuarios']);
Route::post('importarExelEmpresas', [ImpExpController::class, 'importarExelEmpresas']);

Route::get('getGroups', [AdminController::class, 'getGroups']);
Route::get('getCarrera', [AdminController::class, 'getCarrera']);
Route::post('createUser', [UserController::class, 'createUser']);
Route::post('createAdviser', [UserController::class, 'createAdviser']);

Route::post('verificarCodSis', [UserController::class, 'verificarCodSis']);
Route::post('verificarEmail', [UserController::class, 'verificarEmail']);

Route::post('verificarConsultor', [EspacioRevisionController::class, 'verificarConsultor']);
Route::post('obtenerCarpetaEspecifica',[EspacioDeAsesoramientoController::class,'obtenerCarpetaEspecifica']);
Route::post('cambiarRevisado',[EspacioRevisionController::class, 'cambiarRevisado']);
Route::get('ObtenerOpocionesG', [CalendarioController::class, 'ObtenerOpocionesG']);
Route::get('obtenerCalendarioGeneral', [CalendarioController::class, 'obtenerCalendarioGeneral']);

Route::post('crearFechaG', [CalendarioController::class, 'crearFechaG']);
Route::post('dropDate', [CalendarioController::class, 'dropDate']);

Route::post('obtenerNotificaciones', [NotificacionController::class, 'obtenerNotificaciones']);
Route::post('crearNotificacion',[NotificacionController::class, 'crearNotificacion']);
Route::post('actualizarNotificacion',[NotificacionController::class, 'actualizarNotificacion']);
Route::post('eliminarNotificacion',[NotificacionController::class, 'eliminarNotificacion']);

Route::post('obtenerEventoGeneral',[CalendarioController::class, 'obtenerEventoGeneral']);
Route::post('obtenerConsultores',[UserController::class, 'obtenerConsultores']);