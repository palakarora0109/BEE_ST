const Blog = require('../model/blog');

// GET blog
const getAllBlog = async(req,res) =>{
    let blog;
    try{
        blog = await Blog.find();
    } catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message:"No blog"})
    }
    return res.status(200).json({blog});
}

// POST blog
const addBlog = async(req,res)=>{
    const{ Title,Content,Author,Tags,Comments} = req.body;

    let blog;
    try{
        blog = new Blog({
            Title,Content,Author,Tags,Comments
        });
        await blog.save();
    }catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(500).json({message:'Unable to add'});
    }
    return res.status(201).json({message:"Blog Added"}); 
};

// GET BY ID
const getById=async(req,res)=>{
    const id=req.params.id;
    // id is same as written in routes file
    
    let blog;
    try{
        blog = await Blog.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message:"No blog found"});
    }
    return res.status(200).json({blog});

}

// UPDATE blog
const updateBlog = async(req,res)=>{
    const id=req.params.id;

    const { Title,Content,Author,Tags,Comments} = req.body;

    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(id, {
            Title,Content,Author,Tags,Comments
        })
        blog = await blog.save();
    }catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message: "Unable to Update by this id"});
    }
    return res.status(200).json({message:" Updated"});
}

// DELETE blog
const deleteBlog = async(req,res)=>{
    const id=req.params.id;

    let blog;
    try{
        blog = await Blog.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!blog){
        return res.status(404).json({message:"Unable to delete "});
    }
    return res.status(202).json({message:'Deleted'});
}

exports.getAllBlog = getAllBlog;
exports.addBlog=addBlog;
exports.getById=getById;
exports.updateBlog=updateBlog;
exports.deleteBlog=deleteBlog;