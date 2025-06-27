"use client";
import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

// Expanded predefined replies
const predefinedReplies = {
  hello: "Hi there! 👋 How can I assist you today?",
  hi: "Hello! How can I help you?",
  "how are you": "I'm just code, but I'm here to help! 😊",
  "what do you offer":
    "We offer custom printing on t-shirts, mugs, cards, and much more!",
  pricing:
    "Our pricing depends on the product and order quantity. Please specify what you want, and I can provide details.",
  delivery:
    "We offer standard and express delivery options. Delivery usually takes 3-7 business days.",
  returns:
    "You can return products within 14 days of receipt if they are defective or damaged.",
  contact:
    "You can reach our customer support at support@example.com or call 6292 xx xx xx.",
  hours:
    "Our customer support is available Monday to Friday, 9 AM to 6 PM.",
  "thank you": "You're welcome! Let me know if you need anything else.",
  bye: "Goodbye! Have a great day!",
  default:
    "Sorry, I didn’t quite get that. Could you please rephrase or ask something else?",
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const userInput = input.toLowerCase();

    // Find matching reply by checking if user input includes any predefined key
    let botReply = predefinedReplies.default;
    for (const key of Object.keys(predefinedReplies)) {
      if (userInput.includes(key)) {
        botReply = predefinedReplies[key];
        break;
      }
    }
    const botMessage = { text: botReply, sender: "bot" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Chat toggle button */}
      <div data-aos="fade-up" className="fixed bottom-5  right-5 z-50">
        <button
          onClick={toggleChat}
          className="bg-orange-600 text-white rounded-full p-4 shadow-lg hover:bg-orange-700"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <FaTimes size={40} /> : <FaComments size={40} />}
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div
          className="
            fixed bottom-20 right-5
            w-[90vw] max-w-xs sm:w-80 sm:max-w-xs
            bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden z-50 flex flex-col
          "
          style={{
            width: "min(90vw, 350px)",
            maxWidth: "95vw",
          }}
        >
          <div className="bg-orange-600 text-white px-4 py-2 font-semibold text-center">
            Customer Support
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-80 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md max-w-[80%] break-words ${
                  msg.sender === "user"
                    ? "bg-gray-200 self-end text-right ml-auto"
                    : "bg-blue-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 flex border-t">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l outline-none text-sm"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              aria-label="Chat message input"
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 text-white px-4 rounded-r hover:bg-purple-700 text-sm"
              aria-label="Send chat message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
