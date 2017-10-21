"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, carros, motos) {
        this.endereco = endereco;
        this.listaDeCarros = carros;
        this.listaDeMotos = motos;
    }
    Concessionaria.prototype.fornecerHoariosDeFuncionamento = function () {
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00';
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarro = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.mostrarListaDeMoto = function () {
        return this.listaDeMotos;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
