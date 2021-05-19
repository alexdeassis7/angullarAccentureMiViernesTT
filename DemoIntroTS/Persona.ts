export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(cuantosKmCamino: number) {
        this.kilometros = cuantosKmCamino;
    }

    caminar(): void {
        console.log('estoy caminando ' + this.kilometros + " a la semana");
    }

}