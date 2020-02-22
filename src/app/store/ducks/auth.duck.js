import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken } from "../../crud/auth.crud";
import * as routerHelpers from "../../router/RouterHelpers";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API"
};

const initialAuthState = {
  user: undefined,
  authToken: undefined
};
let userId = '';
let jwt = '';

export const reducer = persistReducer(
    { storage, key: "iot-hub", whitelist: ["user", "authToken"] },
    (state = initialAuthState, action) => {
      switch (action.type) {
        case actionTypes.Login: {
          
          const authToken = {}
          authToken.authToken = action.payload.token;
          userId= action.payload.id;
          jwt= action.payload.token;
          return { authToken, user: undefined };
        }

        case actionTypes.Register: {
          const { authToken } = action.payload;

          return { authToken, user: undefined };
        }

        case actionTypes.Logout: {
          routerHelpers.forgotLastLocation();
          return initialAuthState;
        }

        case actionTypes.UserLoaded: {
          const { user } = action.payload;
          // console.log("userLoaded", action.payload)
          return { ...state, user };
        }

        default:
          return state;
      }
    }
);

export const actions = {
  login: payload => ({ type: actionTypes.Login, payload }),
  register: authToken => ({
    type: actionTypes.Register,
    payload: { authToken }
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: user => ({ type: actionTypes.UserRequested, payload: { user } }),
  fulfillUser: user => ({ type: actionTypes.UserLoaded, payload: { user } })
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {

    const { data: user } = yield getUserByToken(userId, jwt);
    // console.log("userLoaded", user)
    yield put(actions.fulfillUser(user));
  });
}

