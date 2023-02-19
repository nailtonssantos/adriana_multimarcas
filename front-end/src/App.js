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


  //Alterar Produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar', {
      method: 'put',
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

        //Mensagem
        alert('Produto alterado com Sucesso!')

        //Cópia do vetor de produtos
      let vetorTemp = [...produtos]


      //Índice
      let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id
      })

      //Alterar produto do vetorTemp
      vetorTemp[indice] = objProduto

      //Atualizar o vetor de produtos
      setProdutos(vetorTemp)

        limparFormulario()
      }

    })
  }



  //Remover Produto
  const remover = () => {
    fetch('http://localhost:8080/excluir/'+objProduto.id, {
      method: 'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      //Mensagem
      alert(retorno_convertido.mensagem)

      //Cópia do vetor de produtos
      let vetorTemp = [...produtos]


      //Índice
      let indice = vetorTemp.findIndex((p) => {
          return p.id === objProduto.id
      })

      //Remover produto do vetorTemp
      vetorTemp.splice(indice, 1)

      //Atualizar o vetor de produtos
      setProdutos(vetorTemp)
      
      //Limpar Formulário
      limparFormulario()


    })
  }


  //Limpar Formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true)
  }


  //Selecionar Produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice])
    setBtnCadastrar(false)
  }


  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover = {remover} alterar = {alterar} />
      <Tabela vetor={produtos} selecionar = {selecionarProduto} />
    </div>
  );
}

export default App;