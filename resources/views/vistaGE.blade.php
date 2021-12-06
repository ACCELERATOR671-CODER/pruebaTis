@extends('templates.plantillaprincipal')

@section('titulo')
    GE-{{$nombre}}
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
    
</script>
@endsection

@section('contenido')
    <script>
        const datos = {
            nombre :          '<?= $nombre ?>',
            nombreAb :        '<?= $nombreAb ?>',
            logo :            '<?= $logo ?>',
            fecha_creacion :  '<?= $fecha_creacion ?>',
            direccion :       '<?= $direccion ?>',
            descripcion:      '<?= $descripcion ?>',
            email :           '<?= $email ?>',
            telefono :        '<?= $telefono ?>',
            orgJur :          '<?= $orgJur ?>',
            duenio:           '<?= $duenio ?>',
        };
    </script>
    <div id='vistaGE'></div>
@endsection