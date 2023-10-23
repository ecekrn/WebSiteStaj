const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  
  if (className === "outgoing") {
    chatLi.innerHTML = `
      <p>${message}</p>`;
  } else {
    chatLi.innerHTML = `
      <i class="fa fa-robot"></i>
      <p>${message}</p>`;
  }
  
  return chatLi;
};

const handleChat = () => {
  const userMessage = chatInput.value.trim(); 
  if (!userMessage) return;


  chatInput.value = "";
  chatInput.style.height = "auto";

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  
  const incomingChatLi = createChatLi("Thinking...", "incoming");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const responseMessage = "This is a example response.";
    incomingChatLi.querySelector("p").textContent = responseMessage;
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 1000); 
};

chatInput.addEventListener("keydown", (e) => {
  
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
