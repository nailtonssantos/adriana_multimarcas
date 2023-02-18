package br.com.nailton.adriana_multimarcas.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.nailton.adriana_multimarcas.model.ProdutoModel;

@Repository
// O campo com a chave primária é o Id, seu tipo é Long, por isso foi
// especificado aqui
public interface ProdutoRepository extends CrudRepository<ProdutoModel, Long> {

}
