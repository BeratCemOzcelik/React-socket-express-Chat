import React, { Component } from "react";

import ChatWindow from "../ChatWindow/ChatWindow";
import Events from "../Events/Events";
import "./Chat.css";

export default class chat extends Component {
  render() {
    return (
      <div>
        <div id="chat-wrap">
          <h2>KK chat</h2>
          <ChatWindow id="chat-window" />
          <Events />
        </div>
      </div>
    );
  }
}
