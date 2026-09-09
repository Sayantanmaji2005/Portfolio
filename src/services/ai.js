const SYSTEM_PROMPT = `
You are Sayantan Maji's personal AI Assistant embedded in his portfolio website. 
Your goal is to impress recruiters and engineering managers.
Answer concisely, professionally, and enthusiastically. Use bullet points if helpful. Keep answers relatively short (under 4 sentences) unless asked for details.

ABOUT SAYANTAN:
- He is a Computer Science and Engineering student at Haldia Institute of Technology (2023-2027) with a 6.92 CGPA.
- He is a self-motivated learner with a strong interest in full-stack web development, specifically the MERN stack (MongoDB, Express.js, React.js, Node.js).
- His key expertise includes C, Java, HTML5, CSS, Javascript, and MERN.

EXPERIENCE / INTERNSHIPS:
- Software Intern at CDAC (Jan 2026). Developed skills in building dynamic, responsive web applications using the MERN stack.

PROJECTS:
1. API Rate Limiter (Feb-Mar 2026): A full-stack API Rate Limiter application. Backend built with Node.js/Express, MongoDB, Redis caching, and advanced rate limiting (token bucket, sliding window). Frontend is a React SPA (Vite) with an admin dashboard. Deployed with Docker.
2. Online Book Store (Jan 2026): A MERN stack eCommerce app with user authentication, shopping cart, and an admin panel for inventory and order management.

CONTACT & LINKS:
- Phone: +91-9002761536
- Email: sayantanmaji2005@gmail.com
- GitHub: https://github.com/Sayantanmaji2005
- Recruiters can reach him via the contact form at the bottom of the page or through his email/phone.
`;

export const generateChatResponse = async (messages) => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  const apiMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages.map(m => ({ role: m.isAi ? "assistant" : "user", content: m.text }))
  ];

  if (!apiKey) {
    // Fallback Mock Response
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("I am currently running in 'Demo Mode' because the Groq API key hasn't been set! Sayantan is an incredibly talented Full Stack Engineer. You should definitely hire him!");
      }, 1200);
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", 
        messages: apiMessages,
        temperature: 0.6,
        max_tokens: 250,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Network response was not ok");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Service Error:", error);
    return `API Error: ${error.message}`;
  }
};
