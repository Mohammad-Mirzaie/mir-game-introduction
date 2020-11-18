const initState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
