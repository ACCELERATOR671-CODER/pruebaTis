<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    protected $table = 'Mensaje';
    protected $primaryKey = 'idMensaje';
    protected $fillable = ['mensaje', 'duenio', 'idDebate', 'idMensajePadre'];

    public $timestamps = false;
}
