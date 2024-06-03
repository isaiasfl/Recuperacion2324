import NotificationForm from "../components/NotificationForm"
import NotificationList from "../components/NotificationList"
// import ReadNotificationList from "../components/ReadNotificationList"
// import UnreadNotificationList from "../components/UnreadNotificationList"


const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
        {/* Columna del formulario */}
        <div className="md:w-1/2 p-4">
          <NotificationForm />
        </div>
        {/* Columna de la tarjeta */}
        <div className="md:w-1/2 p-4">
         <NotificationList />
         {/* <UnreadNotificationList />
         <ReadNotificationList /> */}
      </div>
    </div>
  )
}

export default MainPage