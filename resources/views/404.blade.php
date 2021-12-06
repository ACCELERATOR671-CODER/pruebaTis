@extends('templates.plantillaprincipal')

@section('titulo') 
    404 no encontrado
@endsection

@section('contenido')
    <div>
        <h1>404 {{$msg}} no encontrado </h1>
    </div>
@endsection