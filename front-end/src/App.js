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

  //Retorno
  return (
    <div>
      <p>{JSON.stringify(objProduto)}</p>
      <Formulario botao={btnCadastrar} />
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;