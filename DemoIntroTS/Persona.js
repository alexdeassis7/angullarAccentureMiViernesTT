"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cuantosKmCamino) {
        this.kilometros = cuantosKmCamino;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros + " a la semana");
    };
    return Persona;
}());
exports.Persona = Persona;
