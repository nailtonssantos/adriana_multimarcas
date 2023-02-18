package br.com.nailton.adriana_multimarcas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.nailton.adriana_multimarcas.model.ProdutoModel;
import br.com.nailton.adriana_multimarcas.model.ResponseModel;
import br.com.nailton.adriana_multimarcas.services.ProdutoService;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoService ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModel> listar() {
        return ps.listar();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm) {
        return ps.cadastrarAlterar(pm, "cadastrar");
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModel pm) {
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<ResponseModel> excluir(@PathVariable long id) {
        return ps.excluir(id);
    }

    @GetMapping("/")
    public String rota() {
        return "API de produtos funcionando!";
    }

}
