require('dotenv').config()
const express = require('express')
const cors = require('cors');
const { dbConnect } = require('./Utilities/db_connect');
const waitlistRoutes = require('./Routes/waitlistRoutes');
const { numberController } = require('./Controllers/numberController');


const app = express();

const corsConfiguration={
  origin: ["http://localhost:5173", "https://akshat-blazpay-assignment.vercel.app"],
   credentials: true,
}


app.use(cors(corsConfiguration)) //cors middleware
app.use(express.json()) //for parsing  json body to js object

app.use(express.urlencoded({extended:true})) //for hhandling form data

app.use("/api", waitlistRoutes);

app.get('/api/data',numberController)


const PORT=process.env.PORT || 8080
//listening server
app.listen(PORT,()=>{
  dbConnect();
  console.log(`Server listening at Port: ${PORT}`)
})