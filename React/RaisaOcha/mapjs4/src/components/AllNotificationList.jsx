import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';
import NotificationItem from './NotificationItem';

const AllNotificationList = () => {
  const { notifications, markAsRead, deleteNotification } = useContext(NotificationContext);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">All Notifications Sorted by Date</h2>
      <ul className="space-y-4">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={markAsRead}
            onDelete={deleteNotification}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllNotificationList;
