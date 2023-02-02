import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"





function _drawPlayers() {
    let players = appState.players 
    let template = ''
    players.forEach(p => template += p.ScoreTemplate)
    setHTML('players', template)
}




export class PlayersController {
constructor(){
    console.log('We are working')
    console.log(appState.players)
    appState.on("players", _drawPlayers)
    _drawPlayers()
}

addPlayer() {
    try {
        window.event.preventDefault()
        let form = event.target
        let formData = getFormData(form)
        playersService.addPlayer(formData)
        console.log(formData)
    } catch (error) {
        Pop.error(error)
    }
}

async deletePlayer(playerId) {
    try {
        let yes = await Pop.confirm('Are You Sure You Want To Delete This Player?')
        if(!yes){
            return
        }
        playersService.deletePlayer(playerId)
    } catch (error) {
        Pop.error(error)

    }
}


}