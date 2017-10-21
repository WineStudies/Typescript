import Veiculo from '../Veiculo/veiculo';

export default class Moto extends Veiculo {
  constructor(modelo: string) {
    super();

    this.modelo = modelo;
  }

  public acelerar(): number {
    return (this.velocidade = this.velocidade + 20);
  }
}
