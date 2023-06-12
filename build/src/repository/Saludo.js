"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Saludo {
    Bienvenida(word) {
        const dictionary = ['hola', 'buenos', 'dias', 'preguntar', '.',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ;
    Despedida(word) {
        let dictionary = ['adios', 'adiós', 'bye', 'me voy',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    Gracias(word) {
        let dictionary = ['gracias', 'thanks',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
}
const saludo = new Saludo();
exports.default = saludo;
