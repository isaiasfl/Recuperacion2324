import { useNotification } from "../hooks/useNotification";
import NotificationItem from "./NotificationItem";

const UnreadNotificationList = () => {
  const { notifications } = useNotification();
  const unreadNotifications = notifications.filter(notification => !notification.read);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Unread Notifications</h2>
      <ul className="space-y-4">
        {unreadNotifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </ul>
    </div>
  );
};

export default UnreadNotificationList;
