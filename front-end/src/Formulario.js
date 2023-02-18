function Formulario({botao, eventoTeclado}){
    return(
        <form>
            <input type='text' onChange={eventoTeclado} name='nome' placeholder='Nome do produto' className='form-control'/>
            <input type='text' onChange={eventoTeclado} name='marca' placeholder='Marca do produto' className='form-control'/>
            <input type='number' step='0.01' min='0' onChange={eventoTeclado} name='preco' placeholder='Preço do Produto' className='form-control'/>
            <input type='text' onChange={eventoTeclado} name='tamanho' placeholder='Tamanho do produto' className='form-control'/>
            <select name="sexo" className='form-control'>
                <option value="feminino" selected>Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outros</option>
            </select>

            {
                botao?
                <input type='button' value='Cadastrar' className='btn btn-primary'/>
                :
                <div>
                    <input type='button' value='Alterar' className='btn btn-warning'/>
                    <input type='button' value='Remover' className='btn btn-danger'/>
                    <input type='button' value='Cancelar' className='btn btn-secondary'/>
                </div>
            }
            
        </form>
    )
}

export default Formulario;