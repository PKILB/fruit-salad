import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"

class PlayersService {
addPlayer(formData) {
    let newPlayer = new Player(formData)
appState.players.push(newPlayer)
console.log(appState.players)
appState.emit("players")
saveState('players', appState.players)
}

deletePlayer(playerId) {
    let removePlayer = appState.players.findIndex(d => d.id == playerId)
    if(removePlayer == -1) {
        throw new Error('Bad Player Id')
    }
    appState.players.splice(removePlayer, 1)
    appState.emit("players")
    saveState('players', appState.players)
}

}

export const playersService = new PlayersService()