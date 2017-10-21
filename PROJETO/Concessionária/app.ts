import Carro from './Carro/carro';
import Concessionaria from './concessionaria/concessionaria';
import Pessoa from './Pessoa/pessoa';
import Moto from './Moto/moto';
import { ConcessionariaDao } from './concessionaria/concessionariaDao';
import { Dao } from './DAO/Dao';

//#region Criar Carros
const carroA = new Carro('Eco Sport 2018', 4);
const carroB = new Carro('Civic 2019', 4);
const carroC = new Carro('Mastran 2018', 5);
//#endregion

//#region Criar Carros
const motoA = new Moto('600cc');
const motoB = new Moto('Ninja 1000c');
const motoC = new Moto('Ducat 233RC');
//#endregion

//#region Montar os Carros e as Motors na Concensionaria
const listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
const listaDeMotos: Array<Moto> = [motoA, motoB, motoC];
const concessionaria = new Concessionaria(
  'Jose Armando Costa, 132 - Bugio/Aracaju/Se',
  listaDeCarros,
  listaDeMotos,
);
//#endregion

//#region Comprando um Carro e Moto
const cliente = new Pessoa('Tiago Nunes', 'Carro', 'Eco Sport 2018');
const cliente2 = new Pessoa('Mara Jeannie', 'Moto', '600cc');
//#endregion

console.log(concessionaria.fornecerHoariosDeFuncionamento());

const dao: Dao<Concessionaria> = new Dao<Concessionaria>();

dao.inserir(concessionaria);
