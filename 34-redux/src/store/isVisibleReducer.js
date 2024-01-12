const initState = { boolean: true };

const isVisibleReducer = (state = initState, action) => {
  if (action.type === 'isVisible/change') {
    return { boolean: !state.boolean };
  }

  return state;
};

export default isVisibleReducer;
