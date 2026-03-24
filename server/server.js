import express from 'express'; 
import cors from 'cors' ; 
import 'dotenv/config' ; 



import userRouter from './routes/user.route.js';
import connectDB from './config/mongoDb.js';
import imageRouter from './routes/image.route.js';

const PORT = process.env.PORT || 4000 ; 
const app = express() ; 
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()) ; 
await connectDB() ; 


app.use('/api/user',userRouter); 
app.use('/api/image',imageRouter); 
app.get('/' , (req , res) =>
  res.send("API working") 
)

app.listen(PORT , () => console.log("Server running on port " , PORT)) ; 