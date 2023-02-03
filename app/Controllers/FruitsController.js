import { setText } from "../Utils/Writer.js"
import { Fruit } from "../Models/Fruit.js"
import { appState } from "../AppState.js"

function _drawFruit() {
    setText('fruit', appState.fruit.drawFruit)
}



export class FruitsController {
    constructor(){
        console.log('We are working F')
        _drawFruit()
    }
    
    }