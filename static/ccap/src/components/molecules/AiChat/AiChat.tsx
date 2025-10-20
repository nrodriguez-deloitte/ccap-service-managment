import React from "react";

import "./AiChat.styles.scss";
import { AiChatProps } from "./AiChat.types";

const AiChat: React.FC<AiChatProps> = () => {
  return (
    <div className="ai-chat">
      <input
        type="text"
        placeholder="Ask anything about network outages"
        className="ai-chat__input"
      />

      <button className="ai-chat__button" type="button">
        <span className="sr-only">Send</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none">
          <path
            d="M17.5 17.5L13.9166 13.9166M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="#FAFAFA"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default AiChat;
