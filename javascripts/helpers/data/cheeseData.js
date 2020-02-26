const cheeses = [
  {
      type: 'Swiss',
      color: 'White',
      price: 10,
      id: 'cheese 1'
  },
  {
      type: 'Blue',
      color: 'Blue',
      price: 10,
      id: 'cheese 2'
  },
  {
      type: 'American',
      color: 'Yellow',
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