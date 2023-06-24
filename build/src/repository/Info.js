"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Info {
    Contacto(word) {
        const dictionary = ['contacto', 'información', 'comunicarme', 'comunicarce', 'hablar', 'contactanos',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ;
    Agendar(word) {
        const dictionary = ['agendar', 'asesoría', 'asesoria', 'personalizada',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ;
    Ubicacion(word) {
        const dictionary = ['conócenos', 'ubicados', 'ubicado', 'situados', 'local', 'boulevard', 'hitdata', 'TEAM', 'team',];
        const containsMatch = dictionary.some((dict) => word.includes(dict));
        return containsMatch;
    }
    ;
}
const info = new Info();
exports.default = info;
