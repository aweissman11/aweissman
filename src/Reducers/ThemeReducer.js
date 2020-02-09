export const ThemeReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_THEME':
      return action.theme;
    default:
      return state;
  }
}