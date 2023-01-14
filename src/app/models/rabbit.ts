export class Rabbit {
    id: number;
    color: string;
    name: string;

    constructor(id: number, color: string, name: string) {
        this.id = id;
        this.color = color;
        this.name = name;
    }
}

// Écriture équivalente :
// export class Rabbit2 {
//     constructor(
//         public color: string,
//         public name: string
//     ) {}
// }