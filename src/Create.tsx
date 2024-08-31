import { useEffect, useState } from "react";
import { Students } from "./students.models";
import {
  useAddStudentMutation,
  useUpdateStudentMutation,
  useGetStudentsQuery,
  useGetStudentQuery,
} from "./studentSlice";
import { useNavigate, useParams } from "react-router-dom";
export const Create = () => {
  const [students, setStudents] = useState<Students>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addStudent] = useAddStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();
  const { refetch } = useGetStudentsQuery();
  const { id } = useParams();
  const { data } = useGetStudentQuery(id!);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setStudents({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editMode) {
      await updateStudent(students);
    } else {
      await addStudent(students);
    }
    refetch();
    navigate("/");
    setEditMode(false);
  };
  return (
    <div className="container mx-auto">
      <h2>{editMode ? "Edit" : "Add"} Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="htmlForm-group mb-3">
          <label htmlFor="exampleInputEmail1">Student Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={students?.name || ""}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Student Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={students?.email || ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {editMode ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
