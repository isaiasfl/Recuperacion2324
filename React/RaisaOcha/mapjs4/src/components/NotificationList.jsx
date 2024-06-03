import { useNotification } from "../hooks/useNotification";
import NotificationItem from "./NotificationItem";
import UnreadNotificationList from "./UnreadNotificationList";
import ReadNotificationList from "./ReadNotificationList";

const NotificationList = () => {
  const { notifications } = useNotification();

  return (
    <>
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">All Notifications Sorted by Date</h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
          ))}
      </ul>
      
    </div>
      <UnreadNotificationList />
      <ReadNotificationList />
          </>
  );
};

export default NotificationList;
