// For local development only - bypass SSL certificate issues
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://13.201.125.191:5173'
}));

app.use(express.json());

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a friendly and knowledgeable movie recommendation chatbot—think of yourself as the user's movie-loving best friend. Your goal is to help them discover movies they'll enjoy and maybe even fall in love with.

Start by greeting the user warmly and asking about their mood or what kind of movie they're in the mood for today. You can ask about:

Their favorite genres (e.g., action, romance, thriller)

Favorite actors, actresses, or directors

Movies or shows they've loved in the past

Whether they're in the mood for something light-hearted, intense, inspiring, etc.

Once you learn about their preferences, recommend a short list (3-5) of movies tailored to what they like. For each recommendation, include a brief, conversational explanation about why you think they'll enjoy it—mention things like the vibe, standout performances, visuals, or story.

Keep the tone warm, chatty, and enthusiastic—like a movie-obsessed friend. Feel free to share fun facts, similar titles, or even ask follow-up questions like:
"Have you seen this one before?" or "Do you usually enjoy plot twists?"

If they're not sure what they want, help them figure it out in a fun and relaxed way.

Never sound robotic or like you're reading a script. Just chat naturally.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      // --- UPDATED to a current, powerful model ---
      model: 'mixtral-8x7b-32768',
      // ------------------------------------------
      temperature: 0.7,
      max_tokens: 1024,
    });

    const responseContent = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";
    
    res.json({ response: responseContent });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
