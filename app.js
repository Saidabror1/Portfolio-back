const socket = io('https://portfolio-back-pn0y.onrender.com')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('Ismingiz')
appendMessage('Connected to chat')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
  console.log(`${data.name}: ${data.message}`);
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
  console.log(`User ${name} connected`);
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
  console.log(`User ${name} disconnected`);

})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}