import axios from "axios";

// объекты по API, сервер 
interface IRoom {
  id: string;
  name: string;
  totalPlayers: number;
  blueTeamCard: number;
  redTeamCard: number;
}

const ws = new WebSocket(`ws://localhost:3000/`);

// взаимодействие с сервисом
type TRoomList = Array<IRoom>;

class RoomService {
  constructor() {
    
  }

  getRoomList() {
    axios
    .get("http://localhost:3000/rooms")
    .then((response:TRoomList) => {
      return response;
    })
  }

   joinRoom (roomId:number, roomColor:string){
    ws.onmessage(function send(){
      return [roomId, roomColor]
    });
  }
}

export const roomService = new RoomService();
