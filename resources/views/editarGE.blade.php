@extends('templates.plantillaprincipal')

@section('titulo')
    {{$nombre}}
@endsection

@section('script')
<script>
    const token = sessionStorage.getItem('token');
    if(token){
        const data = new FormData();
        data.append('token', token);
        fetch("api/verificarSession", {
            method: 'POST',
            body:data
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if(Object.keys(json).length < 1){
                sessionStorage.clear();
                location.replace('Login');
            }
        });
    } else {
        location.replace('Login');
    }

    if (token) {
        const idUser = sessionStorage.getItem('id');
        const duenio = {{$duenio}};
        if (duenio != idUser) {
            location.replace('/');
        }
    }
</script>
@endsection

@section('contenido')
    <div id='editGE'></div>
@endsection
