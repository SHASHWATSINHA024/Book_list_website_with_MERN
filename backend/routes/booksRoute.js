
import express from 'express';
import Book from '../models/bookModel.js';
const router =express.Router();

router.get('/',async(request,response)=>
{
	try
	{
		const books= await Book.find({});
		return response.status(201).json({date:books});
	}catch(error)
	{
		console.log(error.message);
		response.status(500).send({message:error.message});
	}
})
//for each book
router.get('/:id',async(request,response)=>
{
	try
	{	const {id} =request.params;
		const book= await Book.findById(id);
		return response.status(200).json(book);
	}catch(error)
	{
		console.log(error.message);
		response.status(500).send({message:error.message});
	}
})
router.put('/:id',async(request,response)=>
{
	try
	{	if(!request.body.title || !request.body.author||!request.body.publishYear )
		{
			return response.status(400).send({
				message:`send all required fields : title, author, publishYear (put)`,
			});

	}	const {id} =request.params;
		const result= await Book.findByIdAndUpdate(id, request.body);
		if(!result)
		{
			return response.status(404).json({message:`book not found to update(put)`,});
		}
		return response.status(200).json({message:`updated(put)`,});
}catch(error)
	{
		console.log(error.message);
		response.status(500).send({message:error.message});
	}
});
router.post('/',async(request,response) =>
{
	try
	{
		if(!request.body.title || !request.body.author||!request.body.publishYear )
		{
			return response.status(400).send({
				message:`send all required fields : title, author, publishYear`,
			});

		}
		
		const newBook={
			title: request.body.title,
			author: request.body.author,
			publishYear: request.body.publishYear,

		};
		const book = await Book.create(newBook);
		return response.status(200).send({
				message:`message sent (y)`,
			});

	}	catch(error)
	{
		console.log(error.message);
		return response.status(500).send({message:error.message});
	}
}
);
router.delete('/:id',async(request,response)=>
{
	try
	{
		const {id}=request.params;
		const result = await Book.findByIdAndDelete(id);
		if(!result)
		{
			return response.status(404).json({message:`error while (delete)`,});
		}	
		return response.status(200).json({message:`(updated)`, });
	}catch(error)
	{
		return response.status(404).json({message:`error while (delete)`,});
	}
});


export default router;