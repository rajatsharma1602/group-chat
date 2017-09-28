//make connection
var socket =  io.connect("http://localhost:3000") ;

var handle = document.getElementById("handle");
var message = document.getElementById("message");
var sendBtn = document.getElementById("send");
var output = document.getElementById("output");



// event emitters
sendBtn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  });
  message.value="";
});
message.addEventListener('keypress',function(){
  socket.emit('typing',handle.value);
});

//event listener
socket.on('chat',function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
});
socket.on('typing',function(data){
  feedback.innerHTML = '<p><em>'+data+' is typing...</em></p>'
});
