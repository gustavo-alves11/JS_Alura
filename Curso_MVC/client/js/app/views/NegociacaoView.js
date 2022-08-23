class NegociacaoView extends View{

    constructor(elemento){
       super(elemento) // elemento DOM onde será aplicado as mudanças no template    
    
    }


    _template(vetor){
        return ` 
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="NegociacaoController1.ordena('data')">DATA</th>
                    <th onclick="NegociacaoController1.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="NegociacaoController1.ordena('valor')">VALOR</th>
                    <th onclick="NegociacaoController1.ordena('total')">VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${vetor.negociacoes.map(n => 
                     `
                    <tr>
                        <td>${DateHelper.DateToString(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.total}</td>
                    </tr>
                  `
                ).join('')}


            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${ vetor.negociacoes.reduce((total, n) => total + n.total, 0.0)}
                </td>
            </tfoot>
        </table>
                `;
    }




}