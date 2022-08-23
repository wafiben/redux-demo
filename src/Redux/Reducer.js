const initState = ["amine", "sirine"];
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default Reducer;
