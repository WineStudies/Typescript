import Concessionaria from './concessionaria';
import { DaoInterface } from '../DaoInterface/Daointerface';

export class ConcessionariaDao implements DaoInterface<Concessionaria> {
  nomeTabela: string = 'tb_concessionaria';

  inserir(object: Concessionaria): boolean {
    console.log('Inserir');
    return true;
  }
  atualizar(object: Concessionaria): boolean {
    console.log('Atualizar');
    return true;
  }
  remover(id: number): Concessionaria {
    console.log('Remover');
    return new Concessionaria('', [], []);
  }
  selecionar(id: number): Concessionaria {
    console.log('Selecionar');
    return new Concessionaria('', [], []);
  }
  selecionarTodos(): Array<Concessionaria> {
    console.log('Selecionar Todos');
    return [];
  }
}
