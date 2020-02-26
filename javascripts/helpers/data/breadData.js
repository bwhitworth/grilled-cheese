const breads = [
  {
      type: 'White',
      color: 'whitesmoke',
      price: 10,
      id: '1'
  },
  {
      type: 'Wheat',
      color: 'wheat',
      price: 10,
      id: '2'
  },
  {
      type: 'Rye',
      color: 'tan',
      price: 10,
      id: '3'
  }
]
const getBreads = () => {
  return breads;
}

let selectedBreadId = '';

const setSelectedBreads = (breadId) => {
  const selectedBreadId = breadId;
  console.log('setSelectedBreadId:', selectedBreadId);
};

export default { getBreads, setSelectedBreads };

