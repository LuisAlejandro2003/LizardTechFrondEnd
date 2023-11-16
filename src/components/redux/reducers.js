// reducers.js
const initialState = [
    { name: '00:00' },
    // ... otros datos iniciales ...
  ];
  
  const chartDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CHART_DATA':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default chartDataReducer;
  