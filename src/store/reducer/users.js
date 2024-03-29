import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const { signin, signin_token, signout, update } = user_actions;

const initial_state = {
  token: "",
  user: {},
  newUser: {},
  messages: [],
};

const user_reducer = createReducer(initial_state, (build) =>
  build
    .addCase(signin.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        messages: action.payload.messages,
      };
      return new_state;
    })
    .addCase(signin_token.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
    .addCase(signout.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
    .addCase(update.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      return new_state;
    })
);

export default user_reducer;
