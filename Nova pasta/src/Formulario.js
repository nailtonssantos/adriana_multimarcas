function Formulario(){
    return(
        <form>
            <input type='text' placeholder='Nome do produto' />
            <input type='text' placeholder='Marca do produto' />
            <input type='number' step='0.01' min='0' placeholder='Preço do Produto' />
            <input type='text' placeholder='Tamanho do produto' />
            <select name="Sexo">
                <option value="feminino" selected>Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outros</option>
            </select>

            <input type='button' value='Cadastrar' />
            <input type='button' value='Alterar' />
            <input type='button' value='Remover' />
            <input type='button' value='Cancelar' />
        </form>
    )
}

export default Formulario;