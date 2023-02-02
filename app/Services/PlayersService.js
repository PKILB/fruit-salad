import { appState } from "../AppState.js"

class PlayersService {
addPlayer(formData) {
appState.players.push(formData)
appState.emit("players")
}
}

export const playersService = new PlayersService()