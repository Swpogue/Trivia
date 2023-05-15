// import { ValuesController } from "./Controllers/ValuesController.js";

import { AxiosController } from "./Controllers/AxiosController.js";
import { TriviaController } from "./Controllers/TriviaController.js";

class App {
  // valuesController = new ValuesController();
  triviaController = new TriviaController();
  axiosController = new AxiosController();
}

window["app"] = new App();
