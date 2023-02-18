package br.com.nailton.adriana_multimarcas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nailton.adriana_multimarcas.model.ProdutoModel;
import br.com.nailton.adriana_multimarcas.services.ProdutoService;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoService ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModel> listar() {
        return ps.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "API de produtos funcionando!";
    }

}
