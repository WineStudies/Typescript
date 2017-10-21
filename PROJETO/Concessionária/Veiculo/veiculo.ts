export default class Veiculo {
  protected modelo: string;
  protected velocidade: number = 0;

  acelerar(): number {
    return (this.velocidade = this.velocidade + 10);
  }
  parar(): number {
    return (this.velocidade = 0);
  }
  velocidadeAtual(): number {
    return this.velocidade;
  }
}
