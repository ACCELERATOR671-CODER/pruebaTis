<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anuncio extends Model
{
    protected $table = 'Anuncio';
    protected $primaryKey= 'idAnuncio';
    protected $fillable = ['anuncio', 'fecha_creacion'];
    public $timestamps = false;
}
