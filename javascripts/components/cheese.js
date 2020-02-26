import util from '../helpers/utils.js';
import cheeseData from '../helpers/data/cheeseData.js';

const selectCheese = (e) => {
  const cheeseId = e.target.id;
  cheeseData.setSelectedCheeses(cheeseId);
};

const cheeseButtonEvent = (e) => {
  const cheeseButtons = document.getElementsByClassName('cheese-btn');
  for(let i=0; i<cheeseButtons.length; i++){
    cheeseButtons[i].addEventListener('click', selectCheese);
  }
};

const makeCheeseButtons = () => {
  const myCheese = cheeseData.getCheeses();
  let domString = '';
    myCheese.forEach((cheeseX) => {
      domString +=  '<div class="btn-lg">'
      domString +=  `<button type="button" class="btn btn-warning cheese-btn" id="${cheeseX.id}">`,
      domString +=  `${cheeseX.type}`,
      domString +=  '</button>'
      domString +=  '</div>'
    });
  util.printToDom('cheese-container', domString); 
  cheeseButtonEvent(); 
  
    };

export default { makeCheeseButtons };