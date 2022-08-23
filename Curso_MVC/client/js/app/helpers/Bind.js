class Bind{ // vai "instanciar" a ProxyFactory e o model
    
    constructor(model, view, ...props){ // os 3 pontos (rest operators) fazem com que os parametros 
                                        //passados após a view se transfomem em um array 

        let proxy = ProxyFactory.create(model, props, model => view.update(model)); 
        
        view.update(model) // para atualizar e mostrar a tabela antes de inserir dados e interagir na pagina
        return proxy; // vai retornar o proxy (uma instancia diferente do Bind)
    }
}