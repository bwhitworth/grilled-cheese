import breads from './components/breads.js';
import cheeses from './components/cheese.js';
import sandwich from './components/sandwich.js';


const init = () => {
  breads.makeBreadRadioButtons();
  cheeses.makeCheeseButtons();
  // call makeSandwich within the selector functions of bread and cheese

};

init();