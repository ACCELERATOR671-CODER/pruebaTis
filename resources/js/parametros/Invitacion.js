/*
    ge = nombre de la grupo empresa
    usuario = id del usuario
    invitacion == 
            => si es false entonces la relacion es del usuario hacia la grupo empresa
            => si es true entonces la relacion es de la grupo empresa hacia el usuario
*/ 

const invitar = async (ge, usuario, invitacion = true) => {
    const data = new FormData();
    data.append('id', usuario );
    data.append('nombre',ge);
    data.append('invitacion', invitacion);
    const response = await fetch('api/mandarInvitacion', {
        method : 'POST',
        body: data
    }).then((response) => response.json());
    return response;
}

export {invitar}