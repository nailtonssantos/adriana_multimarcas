function Tabela({vetor}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome do Produto</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Tamanho</th>
                    <th>Sexo</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice=1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.marca}</td>
                        <td>{obj.preco}</td>
                        <td>{obj.tamanho}</td>
                        <td>{obj.sexo}</td>
                        <td><button className="btn btn-success">Selecionar</button></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;