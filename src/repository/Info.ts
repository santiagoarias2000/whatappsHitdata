class Info {

    public Contacto(word: string): boolean {
        const dictionary: (string)[] = ['contacto', 'información', 'comunicarme', 'comunicarce', 'hablar', 'contactanos',];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;

    };
    public Agendar(word: string): boolean {
        const dictionary: (string)[] = ['agendar', 'asesoría', 'asesoria', 'personalizada',];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;

    };
    public Ubicacion(word: string): boolean {
        const dictionary: (string)[] = ['conócenos', 'ubicados', 'ubicado', 'situados', 'local', 'boulevard', 'hitdata',];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;

    };


}
const info = new Info();
export default info;