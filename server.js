const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3000;

// In-memory storage (replace with proper database in production)
let users = [];

const HF_API_URL = "https://api.deepseek.com/v1/chat/completions";
const HF_TOKEN = "sk-e06f11a2dc874314960b6db41e7468af"; 

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Register endpoint
app.post('/api/register', (req, res) => {
    const { businessName, businessType, email, reviewUrl, password } = req.body;
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    // Store new user
    users.push({ businessName, businessType, email, reviewUrl, password });
    
    res.json({ message: 'Registration successful' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Return user data without password
    const { password: _, ...userData } = user;
    res.json(userData);
});

// Review generation endpoint using DeepSeek API
app.post('/api/generate-review', async (req, res) => {
    const { businessName, keywords } = req.body;

    const response = await fetch(HF_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt }
            ]
            
            // inputs: `Generate a review for a business called ${businessName} that offers services related to ${keywords}`
        })
    });

    const data = await response.json();

    if (data.error) {
        return res.status(500).json({ error: 'Error generating review' });
    }

    res.json({ review: data.generated_text });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
