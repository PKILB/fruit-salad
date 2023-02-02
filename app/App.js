// import { ValuesController } from "./Controllers/ValuesController.js";

import { FruitsController } from "./Controllers/FruitsController.js";
import { PlayersController } from "./Controllers/PlayersController.js";


class App {
  // valuesController = new ValuesController();
  playersController = new PlayersController()
  fruitsController = new FruitsController()
}

window["app"] = new App();
