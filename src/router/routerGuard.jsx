import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  if (!user.isAdmin) {
    return <Navigate to='/' replace />;
  }

  return children;
}

export default Protected