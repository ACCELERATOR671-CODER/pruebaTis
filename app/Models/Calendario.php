<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendario extends Model
{
    protected $table = 'Calendario';
    protected $primaryKey= 'idCalendario';
    protected $fillable = ['idGE', 'idTablon'];
    public $timestamps = false;
}
