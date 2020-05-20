//model for the database structure
const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({

	title:{
		type:String,
		required:true
	},
	status:{
		type:String,
		required:true
	},
	status2:{
		type:String,
		required:true
	},
	commit:{
		type:String,
		required:false
	}
});


module.exports=mongoose.model('Posts',PostSchema);
