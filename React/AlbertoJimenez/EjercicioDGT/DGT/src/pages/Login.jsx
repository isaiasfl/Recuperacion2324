import { useEffect, useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:4000/usuarios");
        if (!response.ok) {
          throw new Error("Error fetching");
        }

        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error fetching data vehicles ", error);
      }
    };
    fetchdata();
  }, [usuarios]);



  return (
    <>
      <Header></Header>
      
      <div className=" flex flex-col items-start">
    <h2 className=" text-xl ">LOGIN</h2>
    
    <form type="submit" className="flex flex-col items-start">

      <label htmlFor="username">Username:</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>
      <label htmlFor="username">Password:</label>
      <div className="flex items-center mb-4">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>

      <button className="text-xl border-solid bg-blue-500 text-white rounded-xl h-8 w-24">Login</button>
      <button className="text-xl border-solid bg-red-300 text-white rounded-xl h-8 w-24">Register</button>
      {/* <Button onClick={handleAddVehicle} texto="Guardar"></Button> */}
    </form>
    
</div>


    </>
  );
};

export default Login;
