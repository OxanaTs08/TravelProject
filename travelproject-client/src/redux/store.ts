import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { userApi } from "./RTKqueries/userQueries";
import { postApi } from "./RTKqueries/postQueries";
import authReducer from "./slices/authSlice";
import { authApi } from "./RTKqueries/authQueries";

const rootReducer = combineReducers({
  userReducer,
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        postApi.middleware,
        authApi.middleware
      ),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
