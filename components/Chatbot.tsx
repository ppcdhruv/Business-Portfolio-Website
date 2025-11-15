import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from './icons/ChatIcon';
import XIcon from './icons/XIcon';
import SendIcon from './icons/SendIcon';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
    id: number;
    sender: 'bot' | 'user';
    text: string | React.ReactNode;
    options?: { text: string; action: () => void }[];
};

const TypingIndicator = () => (
    <div className="flex items-center gap-2 p-3">
        <span className="w-2 h-2 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
        <span className="w-2 h-2 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
    </div>
);

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [stage, setStage] = useState('initial');
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const addMessage = (sender: 'bot' | 'user', text: string | React.ReactNode, options?: { text: string; action: () => void }[]) => {
        setMessages(prev => [...prev, { id: Date.now(), sender, text, options }]);
    };
    
    const addBotMessage = (text: string | React.ReactNode, options?: { text: string; action: () => void }[], delay = 1200) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            addMessage('bot', text, options);
        }, delay);
    };

    useEffect(() => {
      if (isOpen && messages.length === 0) {
        addBotMessage(
            "Hey! I'm the ViziGrowth assistant. I can help with common questions or start an application for you. What can I help with?",
            [
              { text: "How does the sprint work?", action: () => handleFaq('process') },
              { text: "What's the pricing?", action: () => handleFaq('pricing') },
              { text: "Start my application", action: () => handleApplicationStart() },
            ],
            500
        );
      }
    }, [isOpen]);

    const handleOptionClick = (option: { text: string; action: () => void }) => {
        addMessage('user', option.text);
        setMessages(prev => prev.map((msg, index) => index === prev.length - 1 ? { ...msg, options: undefined } : msg));
        option.action();
    };

    const handleFaq = (topic: 'process' | 'pricing') => {
        if (topic === 'process') {
            addBotMessage('The 7-Day Sprint is a focused engagement where I diagnose your funnel, build high-leverage conversion assets, and deploy a complete system. You get tangible results, fast.');
        } else if (topic === 'pricing') {
            addBotMessage('The Project-Based Sprint starts at $2,500 for a full system install. For ongoing optimization, the Growth Partnership retainer starts at $1,000/mo.');
        }
         setTimeout(showInitialOptions, 1800);
    };

    const showInitialOptions = () => {
        addBotMessage('Is there anything else I can help with?', [
            { text: "How does the sprint work?", action: () => handleFaq('process') },
            { text: "What's the pricing?", action: () => handleFaq('pricing') },
            { text: "Start my application", action: handleApplicationStart },
        ]);
    };

    const handleApplicationStart = () => {
        addBotMessage("Great! I just need a few details to get started. What's your full name?");
        setStage('collecting_name');
    };
    
    const handleUserInput = () => {
        if (!userInput.trim()) return;
        const currentInput = userInput.trim();
        addMessage('user', currentInput);
        
        switch (stage) {
            case 'collecting_name':
                addBotMessage(`Thanks, ${currentInput}! What's your work email?`);
                setStage('collecting_email');
                break;
            case 'collecting_email':
                 addBotMessage("Perfect. And finally, what's your website URL?");
                 setStage('collecting_url');
                break;
            case 'collecting_url':
                 addBotMessage("Got it! Thanks for the info. Dhruv will personally review your application and get back to you within 24 hours. Is there anything else I can help with?");
                 setStage('initial');
                 setTimeout(showInitialOptions, 1500);
                break;
            default:
                 addBotMessage("Sorry, I can only help with the options provided right now. Please select one of the topics above.");
                 setTimeout(showInitialOptions, 1500);
                 break;
        }
        setUserInput('');
    };

    return (
        <>
            <AnimatePresence>
            {!isOpen && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[var(--chatbot-primary)] text-[var(--chatbot-primary-fg)] shadow-lg flex items-center justify-center z-[999] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                    aria-label="Open chat"
                >
                    <ChatIcon className="w-8 h-8" />
                </motion.button>
            )}
            </AnimatePresence>

            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-[calc(100%-3rem)] sm:w-96 h-[70vh] max-h-[600px] bg-[var(--chatbot-bg)] border border-[var(--chatbot-border)] rounded-2xl shadow-2xl flex flex-col z-[1000] overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[var(--chatbot-border)] flex-shrink-0">
                        <div className="flex items-center gap-2">
                             <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <h3 className="text-sm font-bold tracking-tight">ViziGrowth Assistant</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800" aria-label="Close chat">
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`text-sm max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-[var(--chatbot-primary)] text-[var(--chatbot-primary-fg)] rounded-br-lg' : 'bg-zinc-100 dark:bg-zinc-800/80 rounded-bl-lg'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                                {msg.options && (
                                    <div className="flex flex-wrap gap-2 mt-3 justify-start">
                                        {msg.options.map(opt => (
                                            <button key={opt.text} onClick={() => handleOptionClick(opt)} className="px-3 py-1.5 text-sm font-semibold border border-[var(--chatbot-border)] rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                                {opt.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                         {isTyping && (
                             <motion.div
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-zinc-100 dark:bg-zinc-800/80 rounded-2xl rounded-bl-lg">
                                    <TypingIndicator />
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    {stage.startsWith('collecting_') && (
                        <div className="p-4 border-t border-[var(--chatbot-border)] flex-shrink-0">
                           <form onSubmit={(e) => { e.preventDefault(); handleUserInput(); }} className="flex items-center gap-2">
                                <input 
                                    type={stage === 'collecting_email' ? 'email' : stage === 'collecting_url' ? 'url' : 'text'}
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder={stage === 'collecting_email' ? "jane@company.com" : stage === 'collecting_url' ? 'https://company.com' : "Type your answer..."}
                                    className="flex-grow bg-zinc-100 dark:bg-zinc-800/80 border-transparent focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 rounded-lg px-4 py-2 text-sm w-full"
                                    autoFocus
                                    required
                                />
                                <button type="submit" className="p-2 rounded-full bg-[var(--chatbot-primary)] text-[var(--chatbot-primary-fg)] flex-shrink-0" aria-label="Send message">
                                    <SendIcon className="w-5 h-5" />
                                </button>
                           </form>
                        </div>
                    )}
                </motion.div>
            )}
            </AnimatePresence>
        </>
    );
};

export default React.memo(Chatbot);