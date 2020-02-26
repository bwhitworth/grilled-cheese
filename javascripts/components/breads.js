import breadData from '../helpers/data/breadData.js';
import util from '../helpers/utils.js';

const selectBread = (e) => {
  const breadId = e.target.id;
  breadData.setSelectedBreads(breadId);
};

const radioButtonEvent = (e) => {
  const radioButtons = document.getElementsByClassName('breadRadio');
  for(let i=0; i<radioButtons.length; i++){
    radioButtons[i].addEventListener('click', selectBread);
  }
};

const makeBreadRadioButtons = () => {
  const myBread = breadData.getBreads();
  let domString = '';
    myBread.forEach((breadX) => {
    domString +=  `<div class="form-check form-check-inline">`,
    domString +=  `<input class="form-check-input breadRadio" type="radio" name="exampleRadios" value="option1" id="${breadX.id}">`,
    domString +=  '<label class="form-check-label" for="exampleRadios1">',
    domString +=  `${breadX.type}`,
    domString +=  '</label>',
    domString +=  '</div>'
    });
  util.printToDom('bread-container', domString); 
  radioButtonEvent(); 
  
    };

export default { makeBreadRadioButtons };