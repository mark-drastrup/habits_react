import { createStore } from 'redux';

const fetchHabits = data => {
  const newAction = {
    type: "FETCH_HABITS",
    data: data
  }
  return newAction;
}

const changeView = data => {
  const newAction = {
    type: "CHANGE_VIEW",
    data: data
  }
  return newAction;
}

const setInterval = data => {
  const newAction = {
    type: "SET_INTERVAL",
    data: data
  }
  return newAction;
}

const setColor = data => {
  const newAction = {
    type: "SET_COLOR",
    data: data
  }
  return newAction;
}

const resetValues = () => {
  const newAction = {
    type: "RESET_VALUES",
  }
  return newAction;
}

const updateValue = data => {
  const newAction = {
    type: "UPDATE_VALUE",
    data: data
  }
  return newAction
}

const goBack = data => {
  const newAction = {
    type: "GO_BACK",
    data: data
  }
  return newAction
}

const initialState = {
  allHabits: [],
  activeView: "habitList",
  interval: "",
  color: "",
  inputValue: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HABITS": {
      const copiedState = Object.assign({}, state);
      copiedState.allHabits = [...action.data.data];
      return copiedState;
    }
    case "CHANGE_VIEW": {
      const copiedState = Object.assign({}, state);
      copiedState.activeView = action.data;
      return copiedState;
    }
    case "SET_INTERVAL": {
      const copiedState = Object.assign({}, state);
      copiedState.interval = action.data;
      return copiedState;
    }
    case "SET_COLOR": {
      const copiedState = Object.assign({}, state);
      copiedState.color = action.data;
      return copiedState;
    }
    case "UPDATE_VALUE": {
      const copiedState = Object.assign({}, state);
      copiedState.inputValue = action.data;
      return copiedState;
    }
    case "RESET_VALUES": {
      const copiedState = Object.assign({}, state);
      copiedState.inputValue = "";
      copiedState.color = "";
      copiedState.interval = "";
      copiedState.activeView = "habitList";
      return copiedState;
    }
    case "GO_BACK": {
      const copiedState = Object.assign({}, state);
      copiedState.activeView = "habitList";
      return copiedState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;