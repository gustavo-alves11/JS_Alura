class Negociacao{ 
    
    constructor(date, quant, valor){
        this._date = new Date(date.getTime());  // para evitar que alterem as propriedade da 
                                                //data ao inves de alterar instanciamos um novo object
        this._quant = quant;
        this._valor = valor;
        this._total = quant*valor;
    }

    get total(){
        return this._quant * this.valor;        
    }

    get data() {
        return new Date(this._date.getTime());   // para evitar que alterem as propriedade da 
                                                //data ao inves de alterar instanciamos um novo object
    }
    
    get quantidade() {
        return this._quant;
    }
    
    get valor() {
        return this._valor;
    }

};