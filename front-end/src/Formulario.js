function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome do produto' className='form-control'/>
            <input type='text' value={obj.marca} onChange={eventoTeclado} name='marca' placeholder='Marca do produto' className='form-control'/>
            <input type='number' value={obj.preco} step='0.01' min='0' onChange={eventoTeclado} name='preco' placeholder='Preço do Produto' className='form-control'/>
            <input type='text' value={obj.tamanho} onChange={eventoTeclado} name='tamanho' placeholder='Tamanho do produto' className='form-control'/>
            <select name="sexo" value={obj.sexo} onChange={eventoTeclado} className='form-control'>
                <option value="" selected>Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
                <option value="O">Outros</option>
            </select>

            {
                botao?
                <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
                :
                <div>
                    <input type='button' value='Alterar' onClick={alterar} className='btn btn-warning'/>
                    <input type='button' value='Remover' onClick={remover} className='btn btn-danger'/>
                    <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary'/>
                </div>
            }
            
        </form>
    )
}

export default Formulario;