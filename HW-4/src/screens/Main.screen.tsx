import { useEffect, useReducer, useRef, useState } from "react";
import AddForm from "../components/add-form/add-form.component";
import Student from "../components/student/student.component";
import useLocalStorage from "../hooks/local-storage.hook";
import { IStudent } from "../types";
import { useSearchParams } from "react-router-dom";
import useStudentActions from "../hooks/useStudentActions";

const Main = () => {
  const [params, setParams] = useSearchParams();
  const lastStdRef = useRef<HTMLDivElement>(null);
  const {
    handleAbsentChange,
    handleAddStudent,
    removeFirst,
    setFilter,
    setInitialData,
    state: { studentsList, filteredList, totalAbsents },
  } = useStudentActions();

  const { storedData } = useLocalStorage(studentsList, "students-list");

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => prev + cur.absents, 0);
    setInitialData(stdList, totalAbs);
  }, [storedData]);

  useEffect(() => {
    const query = params.get("q") || "";
    setFilter(query);
  }, [params]);

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    params.set("q", query);
    setParams(params);
  };

  return (
    <>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {totalAbsents}
        </b>
      </div>
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={params.get("q") || ""}
        />
      </div>
      {filteredList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;
