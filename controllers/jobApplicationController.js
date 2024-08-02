const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Middleware to check registration
function checkRegistration(req, res, next) {
    if (!req.session.isRegistered) {
        return res.redirect('/register'); // Redirect to registration page
    }
    next();
}

// Route to display the job application form
app.get('/apply', checkRegistration, (req, res) => {
    res.send('Application Form'); // Replace with actual form rendering
});

// Registration route
app.get('/register', (req, res) => {
    res.send('Please register here.'); // Replace with actual registration form
});

// Set user as registered (for demo purposes)
app.get('/setRegistered', (req, res) => {
    req.session.isRegistered = true;
    res.send('User marked as registered.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
