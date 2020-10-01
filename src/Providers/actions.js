import cleanStorage from "../utils/cleanStorage";

import env from "../env";

const uri = env.MAIN_GRAPHQL_ENDPOINT;

export default (dispatch, state) => ({
  persistedLogin: () => {
    //dispatch({ type: "PERSISTED_LOGIN" });
  },
  login: ({ email = "", password = "", path = "/" }) => {
    // const vars = {
    //   mail: email,
    //   password,
    // };
    // return fetch(uri, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     query: QUERY_LOGIN,
    //     variables: vars,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const dat = data.data || {};
    //     const { viewer } = dat;
    //     const { users } = viewer;
    //     const user = users[0] || null;

    //     const persistedUser = JSON.stringify(user);
    //     window.localStorage.user = persistedUser;
    //     dispatch({
    //       type: "START_LOGIN",
    //       payload: {
    //         user,
    //       },
    //     });
    //     return data;
      });
  },

  closeLogin: () => {
    //cleanStorage();
    //dispatch({ type: "CLOSE_LOGIN" });
  },
  setBreakpoint: (breakpoint) => {
    dispatch({ type: "SET_BREAKPOINT", payload: breakpoint });
  },
});
