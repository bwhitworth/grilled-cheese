const cheeses = [
  {
      type: 'Swiss',
      color: 'cornsilk',
      price: 10,
      id: 'cheese 1'
  },
  {
      type: 'Blue',
      color: 'lightsteelblue',
      price: 10,
      id: 'cheese 2'
  },
  {
      type: 'American',
      color: 'lemonchiffon',
      price: 10,
      id: 'cheese 3'
  }
];

const getCheeses = () => {
  return cheeses;
}

let selectedCheeseId = '';

const setSelectedCheeses = (cheeseId) => {
  selectedCheeseId = cheeseId;
  console.log('setSelectedCheeseId:', selectedCheeseId);
};

export default { getCheeses, setSelectedCheeses };