export class Fruit {
    constructor(data) {
        this.name = data.name
    }
    get drawFruit() {
        return this.name
    }

}