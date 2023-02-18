package br.com.nailton.adriana_multimarcas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nailton.adriana_multimarcas.model.ProdutoModel;
import br.com.nailton.adriana_multimarcas.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository pr;

    // Método para listar todos os produtos
    public Iterable<ProdutoModel> listar() {
        return pr.findAll();
    };

}
