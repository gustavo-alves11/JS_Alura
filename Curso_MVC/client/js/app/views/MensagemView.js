class MensagemView extends View{
    constructor(elemento){
        super(elemento);// elemento DOM onde será aplicado as mudanças no template dentro do metodo 
                                    //update nessa mensma classe
    }
    _template(vetor) {

        return vetor.texto ? `<p class="alert alert-info">${vetor.texto}</p>` : '<p></p>';
    } 
    


}