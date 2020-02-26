import util from '../helpers/utils.js';

const makeSandwich = () => {
  
  let domString = `<p>here's your grilled cheese...</p>`;
  util.printToDom('sandwich-container', domString); 
  
    };

export default { makeSandwich };

/* <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sandwich Layers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>American</td>
    </tr>
    <tr>
      <td>Swiss</td>
    </tr>
  </tbody>
</table> */