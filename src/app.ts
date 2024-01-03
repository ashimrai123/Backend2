import express from 'express';
import authRoutes from './routes/authRoutes';
import bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';
import errorHandlerMiddleware from './middleware/errorHandler';
import { signupSchema } from './schema/user';



const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());



// Logger middleware
app.use(loggerMiddleware);

// Use the auth routes
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Todo App!');
});



// Error handler middleware
app.use(errorHandlerMiddleware);


// Validate signup route data
app.post('/auth/signup', (req, res, next) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



