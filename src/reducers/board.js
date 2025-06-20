export const boardReducer = (boards = [], action) => {
  switch (action.type) {
    case "CREATE_BOARD": {
      const newBoard = {
        id: Date.now() + "",
        title: action.payload,
        lists: [],
        task: [],
      };
      return [...boards, newBoard];
    }
    case "CHANGE_BOARD_NAME": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }
        return item;
      });
    }
    case "REMOVE_BOARD": {
      return boards.filter((item) => item.id !== action.payload);
    }
    case "ADD_LIST_ID_TO_A_BOARD": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, lists: [...item.lists, action.payload.listId] };
        }
        return item;
      });
      return updatedBoards;
    }
    case "REMOVE_LIST_ID_FROM_A_BOARD": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            lists: item.lists.filter(
              (listId) => listId !== action.payload.listId
            ),
          };
        }
        return item;
      });
      return updatedBoards;
    }
    case "ADD_TASK_ID_TO_A_BOARD": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            task: [...item.tasks, action.payload.taskId],
          };
        }
        return item;
      });
      return updatedBoards;
    }
    case "REMOVE_TASK-ID_FROM_A_BOARD": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            task: item.task.filter(
              (taskId) => taskId !== action.payload.taskId
            ),
          };
        }
        return item;
      });
      return updatedBoards;
    }
    default: {
      return boards;
    }
  }
};
