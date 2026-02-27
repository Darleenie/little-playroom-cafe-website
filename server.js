const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Email configuration
const emailConfig = {
    recipientEmail: 'playroommadison@gmail.com',
    smtp: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'playroommadison@gmail.com', // Your Gmail address
            pass: process.env.GMAIL_APP_PASSWORD
        }
    }
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig.smtp);

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { to, from, subject, text, html, cc, replyTo } = req.body;
        
        // Validate required fields
        if (!to || !subject || !text) {
            return res.status(400).json({ 
                success: false, 
                error: 'Missing required fields: to, subject, text' 
            });
        }
        
        // Email options
        const mailOptions = {
            from: from || emailConfig.recipientEmail,
            to: to,
            cc: cc,
            replyTo: replyTo,
            subject: subject,
            text: text,
            html: html || text
        };
        
        // Send email
        const info = await transporter.sendMail(mailOptions);
        
        console.log('Email sent successfully:', info.messageId);
        
        res.json({ 
            success: true, 
            messageId: info.messageId,
            message: 'Email sent successfully'
        });
        
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send email',
            details: error.message
        });
    }
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Email server is running!',
        timestamp: new Date().toISOString()
    });
});

// Serve the main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/reservation', (req, res) => {
    res.sendFile(path.join(__dirname, 'reservation.html'));
});

app.get('/waiver', (req, res) => {
    res.sendFile(path.join(__dirname, 'waiver.html'));
});

app.get('/party', (req, res) => {
    res.sendFile(path.join(__dirname, 'party.html'));
});

app.get('/partnership', (req, res) => {
    res.sendFile(path.join(__dirname, 'partnership.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Email server running on http://localhost:${PORT}`);
    console.log('Make sure to set GMAIL_APP_PASSWORD environment variable');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
