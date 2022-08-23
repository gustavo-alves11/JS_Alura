class ProxyFactory {

    static create(objeto, props, acao) {  // nÃO será nescessario instanciar

        return new Proxy(objeto, { 

            get(target, prop, receiver) {

                if(props.includes(prop) && ProxyFactory._ehfunction(target[prop])) {
                    return function() {

                        console.log(`a propriedade "${prop}" foi interceptada`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);       
            },
                set(target, prop, value, receiver){
                    if(props.includes(prop)) {
                        //console.log(`a propriedade "${prop}" foi interceptada`);
                        target[prop] = value;
                        acao(target);
                    }
                    return Reflect.set(target, prop, value, receiver);
                    
                }
        });
    }

    static _ehfunction(func){
        return typeof(func) == typeof(Function)
        
    }
}