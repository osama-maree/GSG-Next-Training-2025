import { useState } from "react";
import { IStudent } from "../types";
import { validateStudent } from "../utils/validation";

const INITIAL_STUDENT = {
  age: 0,
  coursesList: [],
  id: "",
  isGraduated: false,
  name: "",
  absents: 0,
};

const useAddStudentForm = (onSubmit: (std: IStudent) => void) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [isOpen, setIsOpen] = useState(false);
  const [errorsList, setErrorsList] = useState<string[]>([]);

  const handleChange = (field: keyof IStudent, value: any) => {
    setStudent((prev) => ({ ...prev, [field]: value }));
  };

  const handleCoursesChange = (list: string[]) => {
    setStudent((prev) => ({ ...prev, coursesList: list }));
  };

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };
    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  };

  return {
    student,
    isOpen,
    errorsList,
    setIsOpen,
    handleChange,
    handleCoursesChange,
    handleSubmit,
    handleClear,
  };
};

export default useAddStudentForm