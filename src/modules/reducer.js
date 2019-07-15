import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  restaurants: []
};

const opentableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_ALL_ITEMS: {


      let payload = action.payload;
      let newItem = payload.map(x => {
        return {name: x.name, address: x.address, area: x.area};
      })

      let newState = _.cloneDeep(state);
      newState.restaurants = newItem;
      return newState;
    }
    case ACTIONS.Types.DELETE_ALL_ITEMS: {
      let newState = _.cloneDeep(state);
      newState.restaurants = [];
      return newState;
    }

    default:
      return state;
  }
};

export default opentableReducer;