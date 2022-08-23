    class ListaNegociacoes {    /// Essa classe serve para proteger o array negociacao, impedindo de ser alterado por 
                                /// pessoas mau intencionadas
        
        constructor() {    
            this._negociacoes = [];   // A classe basicamente cria um array 
        
        }

        adiciona(negociacao) {
            //vai add uma nova negociação no array
            this._negociacoes.push(negociacao);
            //this._armadilha(this);

        }
        ordena(coluna){
            this._negociacoes.sort(coluna);
            console.log("ordena")
        }
        
        inverte(){
            this._negociacoes.reverse();
        }
       
        esvazia(){
            this._negociacoes = [];
        }
        get negociacoes(){
            return [].concat(this._negociacoes); // para evitar add sem o metodo adiciona, se algum der um push a classe vai retornar uma copia do array original 
        }

    }