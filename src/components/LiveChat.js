import React, { useState } from "react";
import live from "./images/live.png";
import chat from "./images/Group 27077.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  function toggleLiveChat() {
    setIsOpen(!isOpen);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    // Simulate sending message to backend server
    setMessageHistory([...messageHistory, message]);
    setMessage("");
  }

  return (
    <>
      <div onClick={toggleLiveChat}>
        <img src={live} alt="chat box" width="30%" />
      </div>
      {isOpen && (
        <div className="live-chat">
          <div className="live-chat-header">
            <img src={chat} alt="chat logo"/>
            <div className="live-chat-title">Chat with a customer care representative</div>
            <button className="live-chat-close" onClick={toggleLiveChat}>
            <FontAwesomeIcon icon={faXmark}  />
            </button>
          </div>
          <div className="live-chat-messages">
            {messageHistory.map((message, index) => (
              <div key={index} className="live-chat-message">
                <div className="live-chat-message-text">{message}</div>
              </div>
            ))}
          </div>
          <form className="live-chat-form" onSubmit={handleMessageSubmit}>
            <input
              type="text"
              className="live-chat-input"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message"
            />
            <button type="submit" className="live-chat-send">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
