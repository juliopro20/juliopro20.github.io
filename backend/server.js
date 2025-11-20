const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your App Password (Not your normal password)
    }
});

// API Endpoint
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email, // Sender address (simulated)
        to: process.env.EMAIL_USER, // Your email address where you want to receive messages
        subject: `Portfolio Contact: ${subject}`,
        text: `
            You have a new message from your portfolio website:
            
            Name: ${name}
            Email: ${email}
            
            Message:
            ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});