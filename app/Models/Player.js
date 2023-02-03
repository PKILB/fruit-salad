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
        <p data-bs-toggle="modal" data-bs-target="#playerModal" class="fs-4" onclick="app.playersController.setActivePlayer('${this.id}')">------------</p>
        <h3>${this.score}</h3>
        </div>`
    }
}

// onclick="app.playersController.setActivePlayer('${this.id}')"