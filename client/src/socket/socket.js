import io from "socket.io-client";
import API from "../api/api";

const socket = io.connect(API.host);

// functions 

export default socket;
