const isSessionActive = async () => {
    const token = sessionStorage.getItem('token');
    if(token){
        const data = new FormData();
        data.append('token', token);
        const data1 = await fetch("api/verificarSession", {
            method: 'POST',
            body:data
        }).then((response) => {
            return response.json();
        });
        if(Object.keys(data1).length > 0){
            return true;
        } else {
            sessionStorage.clear();
            return false;
        }
    }
    return false;
};

const createSession = async(id) => {
    const data = new FormData();
    data.append('idUser', id);
    await fetch('api/crearSession', {
        method: 'POST',
        body:data
    }).then((response) => response.json()).then( (json) => {
        sessionStorage.setItem('token',json.token);
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('ge', json.nombre);
    });
}

const cerrarSession = async ()=>{
    const token = sessionStorage.getItem('token');
    if(token){
        const data = new FormData();
        data.append('token', token);
        await fetch('api/eliminarSession', {
            method:'POST',
            body:data
        });
        sessionStorage.clear();
        location.replace('Login');
    }
};

const getNombre = async () => {
    const dat = new FormData();
    dat.append('id',sessionStorage.getItem('id'));
    const data = await fetch('api/getNombre',{
        method: 'POST',
        body:dat
    }).then((response) => response.json());
    return data.nombreC;
}

export {isSessionActive, createSession, cerrarSession, getNombre};
