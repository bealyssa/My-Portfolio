import React, { useState, useRef, useEffect } from 'react';

const predefinedResponses = {
    greeting: "Hi! I'm Bea, a full-stack developer and UI/UX designer. How can I help you today?",
    about: "I'm a passionate developer with expertise in React, Node.js, and modern web technologies. I love creating beautiful and functional web applications.",
    services: "I offer the following services:\n- Web Development\n- UI/UX Design\n- Mobile App Development\n- Backend Development\n- Technical Consulting",
    pricing: "My rates vary based on project scope and requirements. For a detailed quote, please contact me through the contact form or email.",
    contact: "You can reach me at:\n- Email: your.email@example.com\n- LinkedIn: linkedin.com/in/yourprofile\n- Twitter: @yourhandle",
    default: "I'm not sure I understand. Could you please rephrase your question? You can ask me about my services, experience, or how to contact me."
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Add user message
        const userMessage = { text: inputMessage, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        // Generate bot response
        const botResponse = generateResponse(inputMessage.toLowerCase());
        setTimeout(() => {
            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 500);

        setInputMessage('');
    };

    const generateResponse = (message) => {
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return predefinedResponses.greeting;
        } else if (message.includes('about') || message.includes('who are you')) {
            return predefinedResponses.about;
        } else if (message.includes('service') || message.includes('what do you do')) {
            return predefinedResponses.services;
        } else if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
            return predefinedResponses.pricing;
        } else if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
            return predefinedResponses.contact;
        }
        return predefinedResponses.default;
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-tr from-purple-400 via-purple-300 to-blue-300 hover:from-purple-500 hover:to-blue-400 text-white rounded-full p-4 shadow-xl transition-all duration-300 border border-white/40"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                    >
                        <path d="M21 12c0 4.418-4.03 8-9 8-1.13 0-2.21-.16-3.19-.46L3 20l1.46-3.81C3.53 15.01 3 13.56 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            ) : (
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-96 h-[480px] flex flex-col border border-gray-100">
                    {/* Chat header */}
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-purple-100/60 to-blue-100/40 rounded-t-3xl">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-300 flex items-center justify-center shadow">
                                <span className="text-lg">🧑‍💻</span>
                            </div>
                            <span className="font-semibold text-base text-gray-800">Bea</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-700 p-1 rounded transition-colors"
                            aria-label="Close chat"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-[15px] font-normal bg-white/80 rounded-b-3xl">
                        {messages.length === 0 ? (
                            <div className="text-center text-gray-400 mt-4">
                                Start a conversation with me!
                            </div>
                        ) : (
                            messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2 rounded-2xl border text-sm whitespace-pre-line shadow-sm ${message.sender === 'user'
                                            ? 'bg-gradient-to-tr from-purple-500 to-blue-400 text-white border-purple-100/30'
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat input */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white/90 rounded-b-3xl">
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-gray-50 text-gray-800 rounded-lg px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm placeholder-gray-400 shadow-sm"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-tr from-purple-500 to-blue-400 hover:from-purple-600 hover:to-blue-500 text-white rounded-lg px-4 py-2 transition-colors font-medium text-sm border border-purple-100/30 shadow"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot; 