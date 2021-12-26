<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $table = 'Opcion';
    protected $primaryKey = 'idOption';
    protected $fillable = ['tipoOpcion', 'nombreOpcion','idEvento'];

    public $timestamps = false;
}
