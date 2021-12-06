
const colorPrimary= {//Color claro
    r : 240,
    g : 255,
    b: 240,
}

const colorSecundary = {//Color fuerte
    r : 0,
    g : 221,
    b: 170,
    modo: true,
    modoOscuro(){
        this.r = 33;
        this.g = 46;
        this.b = 54;
    },

    modoClaro () {
        this.r = 0;
        this.g = 221;
        this.b = 170;
    },

    cambiarModo(){
        if(this.modo){
            this.modoOscuro();
            this.modo = false;
        } else {
            this.modoClaro();
            this.modo = true;
        }
    }
}


export {colorPrimary, colorSecundary};