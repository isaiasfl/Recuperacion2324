import { useNotification } from "../hooks/useNotification";

const NotificationItem = ({ notification }) => {
  const { markAsRead, deleteNotification } = useNotification();

  return (
    <li key={notification.id} className="p-4 border rounded-md bg-gray-100">
      <div>
        <p className="text-lg font-medium">{notification.message}</p>
        <p className="text-sm text-gray-500">
          {new Date(notification.date).toLocaleString()}
        </p>
      </div>
      {!notification.read ? (
        <button
          onClick={() => markAsRead(notification.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Mark as Read
        </button>
      ) : (
        <button className="bg-green-500 text-white px-3 py-1 rounded-md">
          Read
        </button>
      )}
      <button
        onClick={() => deleteNotification(notification.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 ml-2"
      >
        Delete
      </button>
    </li>
  );
};

export default NotificationItem;
