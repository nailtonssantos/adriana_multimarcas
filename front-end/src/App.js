import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useEffect, useState} from "react";

function App() {

  //Objeto Produto
  const produto = {
    id : 0,
    nome : '',
    marca : '',
    preco : '',
    tamanho : '',
    sexo : ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [produtos, setProdutos] = useState([])
  const [objProduto, setObjProduto] = useState(produto)

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
    .catch()
  }, [])

  //Obter os dados do formulario
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value})
  }

  //Cadastrar Produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      } else {
        setProdutos([...produtos, retorno_convertido])
        alert('Produto cadastrado com Sucesso!')
        limparFormulario()
      }

    })
  }

  //Limpar Formulário
  const limparFormulario = () => {
    setObjProduto(produto);
  }


  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} />
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;