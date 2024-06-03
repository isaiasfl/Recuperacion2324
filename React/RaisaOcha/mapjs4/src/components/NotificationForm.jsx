import { useState } from 'react';
import { useNotification } from '../hooks/useNotification';

const NotificationForm = () => {
  const { addNotification } = useNotification();
  const [message, setMessage] = useState('');

  const handleAddNotification = () => {
    if (message.trim() !== '') {
      addNotification(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNotification();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Notification</h2>
      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="New Notification Message"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddNotification}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Notification
      </button>
    </div>
  );
};

export default NotificationForm;
