<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notificacion extends Model
{
    protected $table = 'Notificacion';
    protected $primaryKey= 'idNotificacion';
    protected $fillable = ['idUsuario', 'descNotificacion',
                            'link', 'tipoNotificacion', 'visto'];
    public $timestamps = false;
}
