"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./Carro/carro");
var concessionaria_1 = require("./concessionaria/concessionaria");
var pessoa_1 = require("./Pessoa/pessoa");
var moto_1 = require("./Moto/moto");
var Dao_1 = require("./DAO/Dao");
//#region Criar Carros
var carroA = new carro_1.default('Eco Sport 2018', 4);
var carroB = new carro_1.default('Civic 2019', 4);
var carroC = new carro_1.default('Mastran 2018', 5);
//#endregion
//#region Criar Carros
var motoA = new moto_1.default('600cc');
var motoB = new moto_1.default('Ninja 1000c');
var motoC = new moto_1.default('Ducat 233RC');
//#endregion
//#region Montar os Carros e as Motors na Concensionaria
var listaDeCarros = [carroA, carroB, carroC];
var listaDeMotos = [motoA, motoB, motoC];
var concessionaria = new concessionaria_1.default('Jose Armando Costa, 132 - Bugio/Aracaju/Se', listaDeCarros, listaDeMotos);
//#endregion
//#region Comprando um Carro e Moto
var cliente = new pessoa_1.default('Tiago Nunes', 'Carro', 'Eco Sport 2018');
var cliente2 = new pessoa_1.default('Mara Jeannie', 'Moto', '600cc');
//#endregion
console.log(concessionaria.fornecerHoariosDeFuncionamento());
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
