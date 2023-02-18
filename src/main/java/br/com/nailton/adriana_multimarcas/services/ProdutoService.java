package br.com.nailton.adriana_multimarcas.services;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.nailton.adriana_multimarcas.model.ProdutoModel;
import br.com.nailton.adriana_multimarcas.model.ResponseModel;
import br.com.nailton.adriana_multimarcas.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository pr;

    @Autowired
    private ResponseModel rm;

    // Método para listar todos os produtos
    public Iterable<ProdutoModel> listar() {
        return pr.findAll();
    };

    // Método para cadastrar ou alterar produtos
    public ResponseEntity<?> cadastrarAlterar(ProdutoModel pm, String acao) {

        if (pm.getNome().equals("")) {
            rm.setMensagem("O nome do Produto é Obrigatório!");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getMarca().equals("")) {
            rm.setMensagem("O nome da Marca é Obrigatório!");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getPreco().equals("")) {
            rm.setMensagem("O Preço é Obrigatório!");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getTamanho().equals("")) {
            rm.setMensagem("O tamanho é Obrigatório!");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.OK);
            }
        }

    }

    // Método para remover m produto
    public ResponseEntity<ResponseModel> excluir(Long id) {
        pr.deleteById(id);

        rm.setMensagem("Produto excluído com sucesso!");
        return new ResponseEntity<ResponseModel>(rm, HttpStatus.OK);
    }

}
