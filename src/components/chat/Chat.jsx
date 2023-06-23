import "./Chat.css"
import {useSelector} from "react-redux";
import * as SockJS from 'sockjs-client';
import {useState} from "react";
import {users} from "../../redux/reducer/user";
const Chat = () => {
    const [privateChats, setPrivateChats] = useState(new Map());
    const [tab,setTab] =useState("CHATROOM");


    console.log(users.users)
    let colors = [
        '#2196F3', '#32c787', '#00BCD4', '#ff5652',
        '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
    ];


    const userLogin = useSelector(state => state.users.user)
    console.log(userLogin)
    let userName = userLogin.name

    let stompClient = null;
const onError=(err)=>{
    document.querySelector('.connecting').textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    document.querySelector('.connecting').style.color = 'red';
}
    const connect = (e) => {
        let Stopmp = require('stompjs');
        if (userName) {
            document.querySelector('#username-page').classList.add('hidden');
            document.querySelector('#chat-page').classList.remove('hidden')
            let socket = new SockJS('http://localhost:8080/ws')
            stompClient = Stopmp.over(socket);

            stompClient.connect({}, onConnected, onError);
        }
        e.preventDefault();
    }

    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
    }


const onConnected=()=> {

    stompClient.subscribe("/topic/public", onMessageReceived);
    stompClient.subscribe('/user/'+users.name+'/private', onPrivateMessage);
    stompClient.send("/app/chat.addUser",
        {},
        JSON.stringify({sender: userName, type: 'JOIN'})
    )
    document.querySelector('.connecting').classList.add('hidden');
}
    const sendMessage=(e)=> {
        e.preventDefault();
        let messageInput=document.querySelector('#message');

        let messageContent = messageInput.value.trim();
        if (messageContent&&stompClient){
            let chatMessage={
                sender: userName,
                content: messageInput.value,
                type: 'CHAT'
            };
            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage))
            messageInput.value = '';
        }

    }


    const sendPrivateValue=()=>{
        let messageInput=document.querySelector('#message');

        if (stompClient) {
            var chatMessage = {
                sender: userName,
                receiverName:tab,
                content: messageInput.value,
                status:"MESSAGE"
            };

            if(userName !== tab){
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));

        }
    }


const onMessageReceived=(payload)=> {
    let messageArea = document.querySelector('#messageArea');
    console.log(messageArea)
    let message = JSON.parse(payload.body);
    let messageElement = document.createElement('li');
    if (message.type === 'JOIN') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' joined!';
    } else if (message.type === 'LEAVE') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' left!';
    } else {
        messageElement.classList.add('chat-message');
        let avatarElement = document.createElement('i');
        let avatarText = document.createTextNode(message.sender[0]);
        avatarElement.appendChild(avatarText);
        avatarElement.style['background-color'] = getAvatarColor(message.sender);
        messageElement.appendChild(avatarElement);
        let usernameElement = document.createElement('span');
        let usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);
    }
    let textElement = document.createElement('p');
    let messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);
    messageElement.appendChild(textElement);
    console.log(messageArea)
    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;


}

    const getAvatarColor=(messageSender)=>{
        let hash = 0;
        for (let i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        let index = Math.abs(hash % colors.length);
        return colors[index];
    }
return (
    <>
        <div className="member-list">
            <ul>
                <li onClick={()=>{setTab("CHATROOM")}} className={`member ${tab==="CHATROOM" && "active"}`}>Chatroom</li>
                {[...privateChats.keys()].map((name,index)=>(
                    <li onClick={()=>{setTab(name)}} className={`member ${tab===name && "active"}`} key={index}>{users.users.name}</li>
                ))}
            </ul>
        </div>





        <div id="username-page">
            <div className="username-page-container">
                <h1 className="title">Click start for chating</h1>
                <form id="usernameForm" name="usernameForm" onSubmit={connect}>
                    <div className="form-group">

                    </div>
                    <div className="form-group">
                        <button type="submit" className="accent username-submit">
                            Connect
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div id="chat-page" className="hidden">
            <div className="chat-container">
                <div className="chat-header">
                    <h2>Chat Windown</h2>
                </div>
                <div className="connecting">Connecting...</div>
                <ul id="messageArea">

                </ul>
                <form id="messageForm" name="messageForm" onSubmit={sendMessage}>
                    <div className="form-group">
                        <div className="input-group clearfix">
                            <input
                                type="text"
                                id="message"
                                placeholder="Type a message..."
                                autoComplete="off"
                                className="form-control"
                            />
                            <button type="submit" className="primary">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>

)
}
export default Chat;