<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EspaciGeneral extends Model
{
    protected $table = 'tablon';
    protected $primaryKey= 'idEspAse';
    protected $fillable = ['descripcion'];
    public $timestamps = false;
    protected $guarded = ['idEspAse'];
}
