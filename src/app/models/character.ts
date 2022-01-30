// Clase de referencia. Puede estar en otro archivo.
export class Character {
    constructor(
        public id: number,
        public name: string,
        public power: number,
        public isActive: boolean
    ){}
}