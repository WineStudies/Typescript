import Veiculo from '../Veiculo/veiculo';

export default class Carro extends Veiculo {
  // Atributos
  private numeroDePortas: number;

  constructor(modelo: string, numeroDePortas: number)  {

    super();

    // Tem a função de receber os parâmetros
    // enviado no momento da inicialização da classe
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }


}
