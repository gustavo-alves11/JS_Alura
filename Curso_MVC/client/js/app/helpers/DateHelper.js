class DateHelper{ //É uma classe para tratar dados recebidos e que serão retornados 

    constructor(){
        throw Error('DataHelper não pode ser instanciada!!!')
    }

    static DateToString(data){ // vai retornar uma string a partir do objeto instanciado da Data 
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`//full year pega o ano com 4 numeros
    }// usanndo String template

    static StringToDate(texto){// metodo vai retornar uma data pelo texto da string
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) // testa se o formato da string está correto
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));


    }
}