class View{
    constructor(elemento){
        this._elemento = elemento; // elemento DOM onde será aplicado as mudanças no template dentro do metodo 
                                    //update nessa mensma classe
    }

    template(){

        throw new Error('O método template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }



}