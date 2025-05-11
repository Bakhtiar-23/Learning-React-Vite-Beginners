import React, { useState } from 'react';
import forumImage from "../../assets/Forum1.jpg";

const Forum = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    if (username && name) {
      setIsRegistered(true);
      setRegistrationMessage(`Welcome, ${name}! You are now registered.`);
    } else {
      setRegistrationMessage('Please provide both username and your name.');
    }
  };

  const handleLogout = () => {
    setIsRegistered(false);
    setUsername('');
    setName('');
    setChatMessages([]);
    setMessage('');
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { user: name, text: message }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Page Title and Instructions */}
      <div className="forum-header">
        <h1>IT Community Chat Forum</h1>
        <img src={forumImage} alt="Quiz Banner" className="quiz-banner" />
        <p>
          Welcome! To participate in the chat, register with a username and name using the form on the left.
          Once you're registered, you can send and view messages. Forum links are in the sidebar.
        </p>
      </div>

      <div className="page-layout">
        {/* Left Container: Registration Form */}
        <div className="toc-container">
          <h3>Register & Start Chat</h3>
          {!isRegistered ? (
            <form onSubmit={handleRegistration} className="registration-form">
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="username">Username:</label><br />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="name">Your Name:</label><br />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
            {chatMessages.map((msg, index) => (
              <div key={index} className="chat-message">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {isRegistered && (
            <div className="chat-input-container">
              <textarea
                id="chatMessage"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
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
    </>
  );
};

export default Forum;
