import express from "express"
import mongoose from "mongoose"
import {PORT,mongoURL} from "./config.js";
import Book from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
// http://localhost:5555/books/
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(request,response)=>
{
	console.log(request)
	return response.status(234).send('welcome to the website2')
});
app.use('/books',booksRoute);

mongoose.connect(mongoURL)
.then(()=>
{
	console.log('connected to mongo db');
	app.listen(PORT,()=>
{
	console.log(`app is listening to port: ${PORT}`);
});

}).catch((error)=>
{
	console.log(error);
});

