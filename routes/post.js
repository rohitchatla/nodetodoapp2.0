//lib/packages imports
const express=require('express');
const router=express.Router();
const Post=require('../models/Post');


//get back all posts
router.get('/',async(req,res)=>{
	try{
		const posts=await Post.find();
		res.render('index',post=posts);
		
	}catch(err){
		res.json({message: err});
	}	
});



//submit a task
router.post('/', async (req,res)=>{

	
	const post =new Post({
		title: req.body.title,
		status: 'staging'
	});

	try{
	const savedPost=await post.save();
	res.redirect('/posts');
	
	}catch(err) {
		res.json({message: err});
	}

});



//specific post
router.get('/:postId',async(req,res)=>{
	//console.log(req.params.postId);

	try{
		const post=await Post.findById(req.params.postId);
		res.json(post);
	}catch(err){
		res.json({message:err});
	}
});



//delete Post
router.get('/delete/:postId', async (req,res)=>{
	try{
	const removedPost=await Post.remove({_id:req.params.postId});
	res.redirect('/posts');
	}catch(err){
		res.json({message:err});
	}
});




//update/commit a Post
router.post('/update/:postId', async (req,res)=>{//(or)router.put
	var state,state2;

	if(req.body.check == "on"){//checked
		state = "done";
	}else{
		state = "doing";
	}
	
	if(req.body.check2 == "on"){//checked
		state2 = "doing";
	}else{
		state2 = "todo";
	}

	try{
	const updatedPost=await Post.updateOne({_id:req.params.postId},
		{$set: {status:state,status2:state2,commit:req.body.commit}});
	res.redirect('/posts');
	}catch(err){
		res.json({message:err});
	}
	
	
});


module.exports=router;
