const Types = {
    ADD_ALL_ITEMS: "ADD_ALL_ITEMS",
    DELETE_ALL_ITEMS: "DELETE_ALL_ITEMS"
  };
  
const addAllItems = task => ({
  type: Types.ADD_ALL_ITEMS,
  payload: task
});

const deleteAllItems = () => ({
  type: Types.DELETE_ALL_ITEMS
});

export default {
  addAllItems,
  deleteAllItems,
  Types
};