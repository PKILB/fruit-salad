import { generateId } from "../Utils/generateId.js"



export class Player {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.score = data.score || 0
    }
}