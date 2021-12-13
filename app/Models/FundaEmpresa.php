<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FundaEmpresa extends Model
{
    protected $table = 'funda_empresas';
    protected $primaryKey= 'idFunda';
    protected $fillable = ['nombreCorto', 'nombreLargo', 'gestion', 'docente'];
    public $timestamps = false;

}
