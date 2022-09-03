export const selectUser = state => state.userReducer.user;
export const selectToken = state => state.userReducer.user.token;
export const selectDefaultName = state => state.userReducer.user.email;
export const selectName = state => state.userReducer.user.name;