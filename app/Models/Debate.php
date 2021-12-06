<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Debate extends Model
{
    protected $table = 'Debate';
    protected $primaryKey = 'idDebate';
    protected $fillable = ['titulo','descripcion','duenio'];

    public $timestamps = false;
}
