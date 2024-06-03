import { useNotification } from "../hooks/useNotification";
import NotificationItem from "./NotificationItem";

const ReadNotificationList = () => {
  const { notifications } = useNotification();
  const readNotifications = notifications.filter(notification => notification.read);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Read Notifications</h2>
      <ul className="space-y-4">
        {readNotifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </ul>
    </div>
  );
};

export default ReadNotificationList;
