
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/027/388/274/original/head-face-robot-crash-broken-error-doodle-png.png" 
          alt="Error" 
          className="h-32 w-32 mr-4" 
        />
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-lg text-gray-800 mb-4">Lo sentimos, ha ocurrido un error.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg"
            onClick={() => window.history.back()}>
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
