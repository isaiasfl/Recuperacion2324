import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase/tasksApi";
import { useAuthContext } from "../context/useAuthContext";


const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {signInFirebase} =useAuthContext()

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signInWithGoogle(signInFirebase, setError, navigate);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-200 to-gray-500">
      <div className="flex items-center justify-between mx-10">
        <div className="flex flex-col justify-center items-start h-1/2">
          <h1 className="text-6xl font-bold text-gray-800 mt-10 text-center">
            Priority Tasks
          </h1>
          <p className="text-lg text-gray-600 ml-8 mt-10">Proyecto Recuperacion DWEC</p>
        </div>
        <div className="flex justify-center items-start mt-2">
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-1/4 bg-gray-50 py-12 px-4 rounded-lg shadow-lg">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Iniciar Sesión
              </h2>
            </div>
            <form>
              {error && (
                <div className="rounded-md bg-red-100 p-4">
                  <div>
                    <h3 className="text-sm font-medium text-red-700">
                      {error}
                    </h3>
                  </div>
                </div>
              )}
              <div className="rounded-md shadow-sm">
                <button
                  onClick={handleSignIn}
                  className="relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:gb-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Iniciar Sesión con Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginPage;
