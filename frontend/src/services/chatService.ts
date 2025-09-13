// src/services/chatService.ts

// 1. Get the base URL from the .env file instead of hardcoding localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export const sendMessage = async (message: string): Promise<string> => {
  try {
    // 2. Use the correct base URL for the fetch call
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      // Provides a more specific error message
      const errorText = await response.text();
      throw new Error(`Failed to send message: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    
    // 3. Make sure your backend sends a JSON like { "response": "..." }
    return data.response;

  } catch (error) {
    console.error('Error sending message:', error);
    return "Sorry, an error occurred while connecting to the server.";
  }
};
