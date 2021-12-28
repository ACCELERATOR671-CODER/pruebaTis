class Nodo{
    constructor(data){
        this.data = data;
        this.next = null;
        this.after = null;
    }

    addNext(data){
        this.next = data;
    }
    getNext(){
        return this.next;
    }

    getAfter(){
        return this.after;
    }

    addAfter(data){
        this.after = data;
    }

    getData(){
        return this.data;
    }
}

export class ListaCircular{
    constructor(){
        this.primero = null;
        this.tamanio = 0;
        this.ultimo = null;
        this.actual = null;
    }

    start(){
        this.actual = this.primero;
    }

    next(){
        this.actual = this.actual.getNext();
    }

    previous(){
        this.actual = this.actual.getAfter();
    }

    getActual(){
        return this.actual.getData();
    }

    getNext(){
        return this.actual.getNext().getData();
    }

    getAfter(){
        return this.actual.getAfter().getData();
    }

    addDato(dato){
        const datoNodo = new Nodo(dato);
        if(this.primero){
            datoNodo.addNext(this.primero);
            datoNodo.addAfter(this.ultimo);
            this.ultimo.addNext(datoNodo);
            this.ultimo = datoNodo;
            this.primero.addAfter(this.ultimo);
        } else {
            this.primero = datoNodo;
            this.primero.addNext(datoNodo);
            this.primero.addAfter(datoNodo);
            this.ultimo = this.primero;
        }
        this.tamanio = this.tamanio+1;
    }

    getTamanio(){
        return this.tamanio;
    }
}
