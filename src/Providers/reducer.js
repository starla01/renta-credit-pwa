export default (state, action) => {
  if (action.type === "START_LOGIN") {
    return {
      ...state,
      login: { ...state.login, ...action.payload, open: true },
    };
  } else if (action.type === "PERSISTED_LOGIN") {
    const dataUser = window.localStorage.user;
    const user = (dataUser && JSON.parse(window.localStorage.user)) || null;
    if (user) {
      return {
        ...state,
        login: { ...state.login, user, open: true },
      };
    } else {
    }
  } else if (action.type === "CLOSE_LOGIN") {
    return {
      ...state,
      login: {
        user: null,
      },
    };
  } else if (action.type === "SET_BREAKPOINT") {
    return {
      ...state,
      breakpoint: action.payload,
    };
  } else if (action.type === "REGISTER_LOGIN") {
    return {
      ...state,
      login: { ...state.login, ...action.payload, open: true },
    };
  }
  return state;
};
