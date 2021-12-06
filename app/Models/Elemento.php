<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Elemento extends Model
{
    protected $table = 'Elemento';
    protected $primaryKey = 'idElemento';
    protected $fillable = ['nombre','tipo','link','idPadre','idGE'];
    public $timestamps = false;
}
