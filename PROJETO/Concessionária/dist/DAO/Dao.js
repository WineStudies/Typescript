"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Inserir');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Selecionar Todos');
        return Object();
    };
    return Dao;
}());
exports.Dao = Dao;
