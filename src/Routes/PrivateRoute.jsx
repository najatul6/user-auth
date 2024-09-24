import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children
    }
  return <Navigate to="/login"/>
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute