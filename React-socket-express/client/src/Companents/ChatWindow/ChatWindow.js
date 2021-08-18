import React, { useRef } from "react";
import io from "socket.io-client";

let socket = io.connect("http://localhost:5000");

export default function ChatWindow() {
  let output = useRef();

  socket.on("chat", (data) => {
    // serverden veri alan fonksiyon
    addMessageToStorage(data);
    addMessageToUi(data);
  });
  const addMessageToStorage = (newMessage) => {
    //mesajı localStroge e ekleyen fonksiyon.
    let messages = getMessagesFromStorage();

    console.log(messages);
    messages.push(newMessage);

    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const getMessagesFromStorage = () => {
    //mesajları localStorage den alan fonksiyon.

    let messages;

    if (localStorage.getItem("messages") === null) {
      messages = [];
    } else {
      messages = JSON.parse(localStorage.getItem("messages"));
    }
    return messages;
  };

  function deleteMessageFromStorage(deleteMessage) {
    //localStorage den veri silme
  }

  function loadAllMessagesToUI() {
    //tüm mesajları localstorage den ui a aktaran fonksiyon
    let messages = getMessagesFromStorage();

    messages.forEach(function (message) {
      addMessageToUi(message);
    });
  }

  const addMessageToUi = (message) => {};

  return (
    <div id="chat-window">
      <div id="output" ref={output}></div>
      <div id="feedback"></div>
    </div>
  );
}
