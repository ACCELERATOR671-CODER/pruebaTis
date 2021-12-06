<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class session extends Model
{
    protected $table = 'Session';
    protected $primaryKey= 'idSession';
    protected $fillable = ['token','idUser'];
    public $timestamps = false;
}
