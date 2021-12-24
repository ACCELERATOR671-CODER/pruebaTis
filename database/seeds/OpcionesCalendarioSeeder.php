<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OpcionesCalendarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Opcion')->insert([
            [
                "idOption" => "1",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "publicación invitación",
                "idEvento" => null,
            ],[
                "idOption" => "2",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Entrega de propuestas",
                "idEvento" => null,
            ],[
                "idOption" => "3",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Creación de espacios de trabajo por equipos",
                "idEvento" => null,
            ],[
                "idOption" => "4",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Elaboración de portafolios personales",
                "idEvento" => null,
            ],[
                "idOption" => "5",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Firma de contratos",
                "idEvento" => null,
            ],[
                "idOption" => "6",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Inicio del proyecto",
                "idEvento" => null,
            ],[
                "idOption" => "7",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "final del proyecto",
                "idEvento" => null,
            ],[
                "idOption" => "8",
                "tipoOpcion" => "Actividad",
                "nombreOpcion" => "Seguimiento a equipos de desarrollo divididos en sesiones de acuerdo a horarios y días establecidos",
                "idEvento" => null,
            ],[
                "idOption" => "9",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Invitación publica",
                "idEvento" => null,
            ],[
                "idOption" => "10",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Pliego de especificaciones",
                "idEvento" => null,
            ],[
                "idOption" => "11",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Presentación equipos de trabajo",
                "idEvento" => null,
            ],[
                "idOption" => "12",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Contratos",
                "idEvento" => null,
            ],[
                "idOption" => "13",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Boleta de garantía",
                "idEvento" => null,
            ],[
                "idOption" => "14",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Plan de Proyecto",
                "idEvento" => null,
            ],[
                "idOption" => "15",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Google Drive",
                "idEvento" => null,
            ],[
                "idOption" => "16",
                "tipoOpcion" => "Recurso",
                "nombreOpcion" => "Herramientas adicionales: GitHub, GitLab, Trello, y otros",
                "idEvento" => null,
            ],[
                "idOption" => "17",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Grupo Empresas conformadas",
                "idEvento" => null,
            ],[
                "idOption" => "18",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Participación del equipo en el Google Drive",
                "idEvento" => null,
            ],[
                "idOption" => "19",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Revisión de portafolios",
                "idEvento" => null,
            ],[
                "idOption" => "20",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Aprobación de plan de proyecto",
                "idEvento" => null,
            ],[
                "idOption" => "21",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Participación del equipo en Google Drive en el desarrollo del trabajo",
                "idEvento" => null,
            ],[
                "idOption" => "22",
                "tipoOpcion" => "Evaluacion",
                "nombreOpcion" => "Revisión de portafolios personales y grupales",
                "idEvento" => null,
            ],
        ]);
    }
}
