import { useCallback, useReducer } from "react";
import { IStudent } from "../types";
import { ACTIONS } from "../constant";
import reducer from "../store/reducer";

const initialState = {
  studentsList: [] as IStudent[],
  filteredList: [] as IStudent[],
  totalAbsents: 0,
};

const useStudentActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddStudent = useCallback(
    (newStudent: IStudent) => {
      dispatch({ type: ACTIONS.ADD_STUDENT, payload: newStudent });
    },
    [dispatch]
  );

  const handleAbsentChange = useCallback(
    (id: string, change: number) => {
      dispatch({ type: ACTIONS.UPDATE_ABSENT, payload: { id, change } });
    },
    [dispatch]
  );

  const removeFirst = useCallback(() => {
    dispatch({ type: ACTIONS.REMOVE_FIRST });
  }, [dispatch]);

  const setFilter = useCallback(
    (query: string) => {
      dispatch({ type: ACTIONS.SET_FILTER, payload: query });
    },
    [dispatch]
  );
  const setInitialData = useCallback(
    (studentsList: IStudent[], totalAbsents: number) => {
      dispatch({
        type: ACTIONS.SET_INITIAL_DATA,
        payload: { studentsList, totalAbsents },
      });
    },
    [dispatch]
  );
  return {
    handleAddStudent,
    handleAbsentChange,
    removeFirst,
    setFilter,
    setInitialData,
    state,
  };
};

export default useStudentActions;
