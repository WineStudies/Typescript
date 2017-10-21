import Concessionaria from '../concessionaria/concessionaria';
import Carro from '../Carro/carro';

export default class Pessoa {
  private nome: string;
  private veiculoPreferido: string;
  private modeloPreferido: string;
  private carro: Carro;
  private concessionaria: Concessionaria;

  constructor(nome: string, veiculoPreferido: string, modeloPreferido: string ) {
    this.nome = nome;
    this.veiculoPreferido = veiculoPreferido;
  }

  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.veiculoPreferido;
  }

  public dizerModeloPreferido(): string {
    return this.modeloPreferido;
  }

  public comprarCarro(carro: any): void {
    this.carro = carro;
  }

  public dizerCarroQueTem(): Carro {
    return this.carro;
  }
}
