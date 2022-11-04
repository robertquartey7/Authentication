import { Navigate } from "react-router-dom"
import { UserAuth } from "./AuthContext"

export const ProtectedRoute = ({children})=>{

   const {currentUser} = UserAuth()

   if(!currentUser){
    return <Navigate to='/login'></Navigate>
   }

   return children

}