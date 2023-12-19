import io from "socket.io-client";
import API from "../api/api";

const socket = io.connect(API.host);

// functions 
/*
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(prev => {
        return [...prev, data.message];
      });
    });
  }, [socket]);
*/

export default socket;
