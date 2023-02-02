import { generateId } from "../Utils/generateId.js"



export class Player {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.score = data.score || 0
    }


    get ScoreTemplate() {
        return `
        <div class="d-flex justify-content-between align-items-center px-3">
        <h2 onclick="app.playersController.deletePlayer('${this.id}')">${this.name.toUpperCase()}</h2>
        <p class="fs-4">------------</p>
        <h3>${this.score}</h3>
        </div>`
    }
}