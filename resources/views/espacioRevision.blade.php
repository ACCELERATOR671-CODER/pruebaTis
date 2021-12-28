@extends('templates.plantillaprincipal')

@section('titulo') 
    Espacio Revision
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
    
    let idGrupo = -1;

    if (token) {
        const data = new FormData();
        data.append('idUsuario',sessionStorage.getItem('id'));
        fetch("api/verificarConsultor", {
            method: 'POST',
            body: data
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (json.msg == 'novalido') {
                location.replace('/');
            } else {
                idGrupo = json.grupoConsultor;
            }
        });
    }
</script>
@endsection

@section('contenido')
<div id="espRev"></div>
        
<script>
</script>
@endsection