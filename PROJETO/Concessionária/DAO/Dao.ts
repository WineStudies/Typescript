import { DaoInterface } from '../DaoInterface/Daointerface';

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string = '';

  inserir(object: T): boolean {
    console.log('Inserir');
    return true;
  }
  atualizar(object: T): boolean {
    console.log('Atualizar');
    return true;
  }
  remover(id: number): T {
    console.log('Remover');
    return Object();
  }
  selecionar(id: number): T {
    console.log('Selecionar');
    return Object();
  }
  selecionarTodos(): Array<T> {
    console.log('Selecionar Todos');
    return Object();
  }
}
