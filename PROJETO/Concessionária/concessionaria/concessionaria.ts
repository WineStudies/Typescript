import Carro from '../Carro/carro';
import Moto from '../Moto/moto';

import { iConcessionaria } from './i-concessionaria';

export default class Concessionaria implements iConcessionaria{
  private endereco: string;
  private listaDeCarros: Array<Carro>;
  private listaDeMotos: Array<Moto>;

  constructor(endereco: string, carros: Array<Carro>, motos: Array<Moto>) {
    this.endereco = endereco;
    this.listaDeCarros = carros;
    this.listaDeMotos = motos;
  }

  fornecerHoariosDeFuncionamento(): string {
    return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00'
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaDeCarro(): Array<Carro> {
    return this.listaDeCarros;
  }

  public mostrarListaDeMoto(): Array<Moto> {
    return this.listaDeMotos;
  }
}
