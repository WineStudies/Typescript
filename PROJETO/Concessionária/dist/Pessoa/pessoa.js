"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, veiculoPreferido, modeloPreferido) {
        this.nome = nome;
        this.veiculoPreferido = veiculoPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.veiculoPreferido;
    };
    Pessoa.prototype.dizerModeloPreferido = function () {
        return this.modeloPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
