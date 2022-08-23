class NegociacaoService{
    
    constructor() {
            this._http = new HttpService();
    }

    obterNegociacao(){
        
        return new Promise((resolve, reject) => {
        
            this._http
            .get('negociacoes/semana')
                .then(negociacoes =>{
                resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
            })
            .catch(erro =>{
                reject('ERRO: não foi possivel obter as informações')
                console.log(erro);
        
            })
            })
               };

    obterNegociacaoSemanaPassada(){
    
    return new Promise((resolve, reject) => {
        
        this._http
        .get('negociacoes/anterior')
        .then(negociacao =>resolve(negociacao.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
        ).catch(erro=>{
            console.log(erro)
            reject('ERRO: não foi possivel obter as informações da semana passada')
        })                
    });
};

obterNegociacaoSemanaRetrasada(){
    
    return new Promise( (resolve, reject) => {
        
        this._http
        .get('negociacoes/retrasada').then(negociacoes =>{
            resolve(negociacoes.map(object => new Negociacao(new Date(object.data), object.quantidade, object.valor)))
        }).catch(erro=>{
            console.log(erro)
            reject('ERRO: não foi possivel obter as informações da semana passada')
        })
}
)};
}
