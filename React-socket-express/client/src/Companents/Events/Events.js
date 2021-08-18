import React, { useRef } from "react";
import io from "socket.io-client";



export default function Event() {

  let sender = useRef(); //referans verip dom elementine ulaşıyoruz
  let message = useRef();
  let socket = io.connect("http://localhost:5000")


  const dataSend = () => { //sunucuya datayı gönderiyoruz

    
    socket.emit('chat', { message:  message.current.value, sender: sender.current.value }, (error) => {
      if(error) {
        alert(error);
      }
    });

  };

  

  return (
    <div>
      <input type="text" id="sender" placeholder="ad" ref={sender} />

      <input type="text" id="message" placeholder="mesaj" ref={message} />

      <button id="submitBtn" onClick={dataSend}>
        Gonder
      </button>

      <input type="file" id="imageBtn"></input>

    </div>
  );
}
