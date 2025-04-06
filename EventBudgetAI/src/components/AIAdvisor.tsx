import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const AIAdvisor = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Greetings! I'm your AI Event Budget Advisor. Feel free to ask me about budgeting strategies, cost-saving tips, and best practices for your event planning."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const commonResponses = [
    "Hello and welcome! How may I assist you with your event budget today?",
    "Good day! I'm here to help you optimize your event budget. How can I assist?",
    "Good morning! Ready to provide insightful budgeting advice for your upcoming event. How can I help?",
    "Good evening! Let's work together to ensure your event budget is well-planned and cost-effective."
  ];

  const budgetResponses = [
    "For catering, consider allocating around 30% to 40% of your total budget, depending on the number of guests and the type of menu you choose.",
    "Venue costs often represent the largest portion of the event budget. It's advisable to negotiate rates early, especially for off-peak times.",
    "Decor is crucial for setting the tone of your event. Consider dedicating approximately 10-15% of your budget to create an impactful atmosphere without overspending.",
    "Entertainment can significantly enhance your guests' experience. A budget of 10-20% is typical for activities, performers, or speakers.",
    "Transportation and accommodations can be significant costs, especially for destination events. Be sure to budget wisely for these logistics to avoid surprises."
  ];

  const eventPlanningTips = [
    "It's essential to plan for unforeseen expenses. Always set aside 5-10% of your total budget for contingencies.",
    "Consider hosting your event during off-peak seasons to secure discounts on venues, catering, and other services.",
    "A detailed timeline of your event can help prevent last-minute costs. Ensure you have a clear agenda and stick to it to avoid extra charges.",
    "Vendor negotiations can significantly impact your budget. Don't hesitate to ask for discounts, especially for long-term relationships or bulk bookings.",
    "Prioritize your event’s core elements (e.g., venue, catering, entertainment) and be flexible with other aspects (e.g., decor, gifts)."
  ];

  // Function to randomly select a response
  const getRandomResponse = (type: 'common' | 'budget' | 'eventTips') => {
    const responses = type === 'common' ? commonResponses : type === 'budget' ? budgetResponses : eventPlanningTips;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = input.trim();
    setInput(''); // Reset the input field

    // Add user message to chat
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);

    // Show loading state
    setIsLoading(true);

    setTimeout(() => {
      let aiResponse = '';

      // Check if the user input matches common greetings or specific budgeting/event planning queries
      if (userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('morning') || userMessage.toLowerCase().includes('evening')) {
        aiResponse = getRandomResponse('common');
      } else if (userMessage.toLowerCase().includes('food') || userMessage.toLowerCase().includes('venue') || userMessage.toLowerCase().includes('event') || userMessage.toLowerCase().includes('catering')) {
        aiResponse = getRandomResponse('budget');
      } else if (userMessage.toLowerCase().includes('planning') || userMessage.toLowerCase().includes('tips') || userMessage.toLowerCase().includes('advice')) {
        aiResponse = getRandomResponse('eventTips');
      } else {
        aiResponse = "I recommend discussing key aspects like food, venue, and entertainment. Let me know what specific part of your event you'd like to focus on!";
      }

      // Add AI response to chat
      setMessages([...newMessages, { role: 'assistant' as const, content: aiResponse }]);
      setIsLoading(false);
    }, 1000); // Simulating a delay for the AI response (1 second)
  };

  // Scroll to the bottom of the chat when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card className="w-full h-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Event Budget Advisor
        </CardTitle>
        <CardDescription>
          Ask questions about event budgeting, planning, and best practices, and receive professional insights.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex flex-col h-[calc(100vh-14rem)]">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-1">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={message.role === 'assistant' ? 'ai-bubble max-w-[80%]' : 'user-bubble max-w-[80%]'}>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="ai-bubble max-w-[80%]">
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <p className="text-sm">Processing your request...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ask about event budgeting..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || input.trim() === ''}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AIAdvisor;
