"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('Inserir');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('Atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('Remover');
        return new concessionaria_1.default('', [], []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('Selecionar');
        return new concessionaria_1.default('', [], []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('Selecionar Todos');
        return [];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
