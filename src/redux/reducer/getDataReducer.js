const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      let data = action.data;
      console.log("data", data);
      return [...state];
    default:
      return state;
  }
};

export default getDataReducer;
