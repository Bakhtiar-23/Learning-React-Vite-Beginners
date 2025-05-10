import React, { useState } from 'react';

const Forum = () => {
  // State to handle the user registration
  const [username, setUsername] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  // Handle user registration
  const handleRegistration = (e) => {
    e.preventDefault();
    if (username) {
      setIsRegistered(true);
      setRegistrationMessage(`Welcome, ${username}! You are now registered.`);
    } else {
      setRegistrationMessage('Please provide a valid username.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsRegistered(false);
    setUsername('');
    setChatMessages([]);
    setMessage('');
  };

  // Handle sending a chat message
  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { user: username, text: message }]);
      setMessage('');
    }
  };

  // Handle Enter key press for sending a message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Prevents Enter from adding a new line
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="page-layout">
      {/* Left Container: Registration Form */}
      <div className="toc-container">
        <h3>Register & Start Chat</h3>
        {!isRegistered ? (
          <form onSubmit={handleRegistration} className="registration-form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        ) : (
          <div>
            <p>{registrationMessage}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      {/* Center: Chat Content */}
      <div className="content-container">
        <h4>Chat Room</h4>
        <div id="chatBox" className="chat-box">
          {/* Render chat messages */}
          {chatMessages.map((msg, index) => (
            <div key={index} className="chat-message">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        {isRegistered && (
          <div className="chat-input-container">
            <textarea
              id="chatMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress} // Trigger send on Enter
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        )}
      </div>

      {/* Right Panel: IT Community Forum Links */}
      <div className="resource-sidebar">
        <h4>IT Community Forums</h4>
        <ul>
          <li><a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li>
          <li><a href="https://dev.to" target="_blank" rel="noopener noreferrer">Dev.to</a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></li>
          <li><a href="https://reddit.com/r/programming" target="_blank" rel="noopener noreferrer">Reddit Programming</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Forum;
