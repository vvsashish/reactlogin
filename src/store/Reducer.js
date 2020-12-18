const initialState = {
    IsCredentialsValid: false,
    Config:{}
};
const loginReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "CHECK_LOGIN_CREDENTIALS":
            newState.IsCredentialsValid = action.payload;
            break;
        case "GET_CONFIG":
            newState.Config= action.payload;
            break;
        default:
            return newState;
    }
    return newState;
}
export default loginReducer;