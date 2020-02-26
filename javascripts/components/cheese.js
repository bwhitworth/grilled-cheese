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
  const allCheeses = cheeseData.getCheeses();
  let domString = '';
    allCheeses.forEach((cheeseX) => {
      domString +=  '<div class="btn-lg">'
      domString +=  `<button type="button" class="btn cheese-btn" id="${cheeseX.id}" style="background-color:${cheeseX.color}">`,
      domString +=  `${cheeseX.type}`,
      domString +=  '</button>'
      domString +=  '</div>'
    });
  util.printToDom('cheese-container', domString); 
  cheeseButtonEvent(); 
  
    };

export default { makeCheeseButtons };