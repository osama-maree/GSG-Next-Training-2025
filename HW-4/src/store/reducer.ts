import { ACTIONS } from "../constant";
import { IStudent } from "../types";

interface IState {
  studentsList: IStudent[];
  filteredList: IStudent[];
  totalAbsents: number;
}

type Action =
  | {
      type: typeof ACTIONS.SET_INITIAL_DATA;
      payload: { studentsList: IStudent[]; totalAbsents: number };
    }
  | { type: typeof ACTIONS.ADD_STUDENT; payload: IStudent }
  | { type: typeof ACTIONS.REMOVE_FIRST }
  | {
      type: typeof ACTIONS.UPDATE_ABSENT;
      payload: { id: string; change: number };
    }
  | { type: typeof ACTIONS.SET_FILTER; payload: string };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ACTIONS.SET_INITIAL_DATA:
      return {
        ...state,
        studentsList: action.payload.studentsList,
        filteredList: action.payload.studentsList,
        totalAbsents: action.payload.totalAbsents,
      };
    case ACTIONS.ADD_STUDENT:
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
        filteredList: [action.payload, ...state.studentsList],
      };
    case ACTIONS.REMOVE_FIRST:
      const updatedList = state.studentsList.slice(1);
      return {
        ...state,
        studentsList: updatedList,
        filteredList: updatedList,
      };
    case ACTIONS.UPDATE_ABSENT: {
      const { id, change } = action.payload;
      const updatedStudents = state.studentsList.map((std) =>
        std.id === id ? { ...std, absents: std.absents + change } : std
      );
      return {
        ...state,
        studentsList: updatedStudents,
        filteredList: updatedStudents,
        totalAbsents: state.totalAbsents + change,
      };
    }
    case ACTIONS.SET_FILTER:
      const query = action.payload.toLowerCase();
      return {
        ...state,
        filteredList: query
          ? state.studentsList.filter((std) =>
              std.name.toLowerCase().includes(query)
            )
          : state.studentsList,
      };
    default:
      return state;
  }
};

export default reducer;
