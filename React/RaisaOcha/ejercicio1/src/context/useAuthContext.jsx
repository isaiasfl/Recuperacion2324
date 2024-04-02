import {createContext, useContext, useState} from  'react'

const AuthContext = createContext()

export const AuthProvider = ({children})=> {
const [userFirebase, setUserFirebase] = useState(null)
// función para guardar en el estado el inicio de la sesión
const signInFirebase = (userData) => {
  setUserFirebase(userData);
}

// función paro guardar en el estado el cierre de la sesión.

const signOutFirebase =() => {
  setUserFirebase(null);
}

  // aquí pongo todas las funciones que necesite pasar a través de mi
// contexto.

return (
  <AuthContext.Provider
    value={{ userFirebase, signInFirebase, signOutFirebase }}
  >
    {children}
  </AuthContext.Provider>
);
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}