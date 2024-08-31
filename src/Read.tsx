import { useDeleteStudentMutation, useGetStudentsQuery } from "./studentSlice";
import { NavLink } from "react-router-dom";

export const Read = () => {
  const {
    data: students,
    isSuccess,
    isError,
    isLoading,
  } = useGetStudentsQuery();
  const [deleteStudents] = useDeleteStudentMutation();
  const { refetch } = useGetStudentsQuery();
  const handleDelete = (id) => {
    deleteStudents(id);
    refetch();
  };
  if (isError) {
    return <>Something went wrong</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="container mx-auto">
      <div className="row gap-2">
        {isSuccess &&
          students?.map(({ name, email, id }) => (
            <div className="col-3" key={id}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="card-link"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                  <button className="card-link">
                    <NavLink to={`edit/${id}`}>Edit</NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
