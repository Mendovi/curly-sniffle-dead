var factory = new WebSocketClientFactory();
WebSocket webSocket = await factory.ConnectAsync(new Uri("wss://mendovi.github.io/curly-sniffle-dead/"));

Stream stream = tcpClient.GetStream();
var factory = new WebSocketServerFactory();
WebSocketHttpContext context = await factory.ReadHttpHeaderFromStreamAsync(stream);

if (context.IsWebSocketRequest)
{
    WebSocket webSocket = await factory.AcceptWebSocketAsync(context);
}

private async Task Receive(WebSocket webSocket)
{
    var buffer = new ArraySegment<byte>(new byte[1024]);
    while (true)
    {
        WebSocketReceiveResult result = await webSocket.ReceiveAsync(buffer, CancellationToken.None);
        switch (result.MessageType)
        {
            case WebSocketMessageType.Close:
                return;
            case WebSocketMessageType.Text:
            case WebSocketMessageType.Binary:
                string value = Encoding.UTF8.GetString(buffer.Array, 0, result.Count);
                Console.WriteLine(value);
                break;
        }
    }
}



private async Task Send(WebSocket webSocket)
{
    var array = Encoding.UTF8.GetBytes("Hello World");
    var buffer = new ArraySegment<byte>(array);
    await webSocket.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
} 


public async Task Run()
{
    var factory = new WebSocketClientFactory();
    var uri = new Uri("ws://localhost:27416/chat");
    using (WebSocket webSocket = await factory.ConnectAsync(uri))
    {
        // receive loop
        Task readTask = Receive(webSocket);

        // send a message
        await Send(webSocket);

        // initiate the close handshake
        await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, null, CancellationToken.None);

        // wait for server to respond with a close frame
        await readTask; 
    }           
}




function cat_down () {x = 0;
x = document.getElementById("caat").offsetTop;
xn = x + 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_up () {
x = 0;
x = document.getElementById("caat").offsetTop;
xn = x - 50;
document.getElementById("caat").style.top = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_left () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x - 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}
function cat_right () {
x = 0;
x = document.getElementById("caat").offsetLeft;
xn = x + 50;
document.getElementById("caat").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}

function cam_down () {x = 0;
x = document.getElementById("cav").offsetTop;
xn = x + 50;
document.getElementById("cav").style.top = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_up () {
x = 0;
x = document.getElementById("cav").offsetTop;
xn = x - 50;
document.getElementById("cav").style.top = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_left () {
x = 0;
x = document.getElementById("cav").offsetLeft;
xn = x - 50;
document.getElementById("cav").style.left = xn+"px"
socket.send(document.getElementById("cav").style.top);
}
function cam_right () {
x = 0;
x = document.getElementById("cav").offsetLeft;
xn = x + 50;
document.getElementById("cav").style.left = xn+"px"
socket.send(document.getElementById("caat").style.top);
}



function viewDiv(){
  document.getElementById("div1").style.display = "block";
};
