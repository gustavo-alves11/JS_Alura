class NegociacaoController{ // classe controler é como uma classe principal


     constructor(){  // constructor em JS não tem um nome 
        let $ = document.querySelector.bind(document); // cria uma espécie de cache para nao precisar usar o DOM toda hora
    
        this._inputData = $('#data'); //São privados _ 
        this._inputquant = $('#quantidade');
        this._inputvalor = $('#valor');
        this._ordemAtual = '';
        
        this._listaNegociacoes = new Bind(// nova classe associativa, vai "ligar a view e a Mensagem" 
        new ListaNegociacoes(), // recebe as "informaçoes de mensagens" 
        new NegociacaoView($('#tabela')), // recebe a View 
        'adiciona', 'esvazia', 'ordena', 'inverte'); // e as propriedades que serão chamadas para relizar uma ação
    

        this._mensagem = new Bind( // nova classe associativa, vai "ligar a view e a Mensagem"
            new Mensagem(), // recebe as "informaçoes de mensagens"
            new MensagemView($('#mensagemView')), // recebe a View 
            'texto'); // e as propriedades que serão chamadas para relizar uma ação

    }

    adiciona(event){
        event.preventDefault(); //evita o recarregamento da pagina
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto ='Operação efetuada!'; // toda vez que o metodo for chamado iremos alterar apenas o valor de texto da msg
        
        
        this._limpaForm();
    }
    apaga(){
        this._listaNegociacoes.esvazia();
        
        this._mensagem.texto = 'Linhas excluidas!'; // toda vez que o metodo for chamado iremos alterar apenas o valor de texto da msg
        
        }

    ordena(coluna){
        console.log("ordena")
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverte(); 
        }
        else{
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        
        }
        this._ordemAtual = coluna;
    }    
    
    importaNegociacoes(){
            let service = new NegociacaoService();
            
            
            Promise.all([
                            service.obterNegociacao(), 
                            service.obterNegociacaoSemanaPassada(), 
                            service.obterNegociacaoSemanaRetrasada()
                        ]).then(negociacoes => {
                            negociacoes
                                .reduce((arrayAchatado, array)=> arrayAchatado.concat(array), [])
                                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                            this._mensagem.texto = "Negociações importadas com sucesso";
                            })
                            .catch(erro => this._mensagem.texto = erro);

                        }
                        

            // service.obterNegociacao();
            // promise.then((negociacoes)=>{
            //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            //     this._mensagem.texto = "Negociações importadas com sucesso";
            // }) 
            // .catch((erro) => this._mensagem.texto = erro)
            
            // service.obterNegociacao();
            // promise.then((negociacoes)=>{
            //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            //     this._mensagem.texto = "Negociações importadas com sucesso";
            // }) 
            // .catch((erro) => this._mensagem.texto = erro)

            // service.obterNegociacao();
            // promise.then((negociacoes)=>{
            //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            //     this._mensagem.texto = "Negociações importadas com sucesso";
            // }) 
            // .catch((erro) => this._mensagem.texto = erro)
    
    
    


    //metodos _privados 
    _criaNegociacao(){ //vai ser executado no metodo adiciona
        return new Negociacao(
            //StringToDate é um metodo estatico devido a isso não é necessario instanciar a classe DateHelper
            DateHelper.StringToDate(this._inputData.value), // recebe a data como uma string (01/01/2000)
            this._inputquant.value, 
            this._inputvalor.value)
    }

    _limpaForm(){ // vai ser executado no metodo adiciona
        this._inputData.value = '';  //vai alterar os valores dos campos para limpar o form apos a criação da negociação
        this._inputquant.value = 1;
        this._inputvalor.value = '';
        
        this._inputData.focus();// coloca o foco no primeiro input
    }

        //O COD COMENTADO VAI VIRAR UMA CLASSE NOVA
        // 

        // let data = new Date(
        //     ...this._inputData.value // o ... inclui os dados do array de forma individual e ordenada
        //     .split('-') // 
        //     .map((item, indice)=> item - indice % 2 ) //quando o indice do array for 1 (mês) vai subtrair 1   
        // );     // aqui acima usamos uma arrow function 
        // console.log(data);
         
        // let diaMesAno = negociacao.data.getDate() // essa let mostra a data no formato que queremos 
        // + '/' + (negociacao.data.getMonth() + 1)
        // + '/' + negociacao.data.getFullYear();

 




}