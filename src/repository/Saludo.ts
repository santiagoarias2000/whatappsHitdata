class Saludo {

    public Bienvenida(word: string): boolean {
        const dictionary: string[] = ['hola', 'buenos', 'dias', 'preguntar','.','info'];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;

    };
    public Despedida(word: string): boolean {
        let dictionary: string[] = ['adios', 'adiós', 'bye', 'me voy',];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;
    }
    public Gracias(word: string): boolean {
        let dictionary: string[] = ['gracias', 'thanks',];
        const containsMatch: boolean = dictionary.some((dict: string) => word.includes(dict));
        return containsMatch;
    }

}
const saludo = new Saludo();
export default saludo;