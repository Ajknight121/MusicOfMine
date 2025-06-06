import React from 'react';
import './CreatePost.css';

import { useState } from 'react';

import { supabase } from '../client';



const CreatePost = () => {
    const [post, setPost] = useState({title: "", author: "", description: "", image:null})
    
    const createPost = async (event) => {
        event.preventDefault();
    
        await supabase
            .from('Posts')
            .insert({title: post.title, author: post.author, description: post.description})
            .select();
    
        // window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label for="title">Post Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Song name</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <img src={post.image} width={"100px"} height={"100px"} />
                <label for="image">Image</label><br />
                <input type="text" id="image" name="image" onChange={handleChange} /><br />
                <br/>

                <label for="description">Talk about it!</label><br />
                <textarea rows="5" cols="50" id="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost