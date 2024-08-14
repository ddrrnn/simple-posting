import React, { useState } from 'react'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiTrash } from "react-icons/pi";



const PostFooter = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        if (liked){
            setLiked(false);
            setLikes(likes-1);
        }else{
            setLiked(true);
            setLikes(likes + 1);
        }
    }
  return (
    <div class="card-actions justify-between">

        <div className='p-[2px] rounded-sm hover:bg-red-400 cursor-pointer'>
        <PiTrash />
        </div>

        <div class= "gap-1 flex justify-center items-center cursor-pointer text-[18px]" onClick={(handleLike)}>
        {!liked? (<IoMdHeartEmpty />) : (<IoMdHeart />)}
        <p class="text-sm">{likes}</p>
        </div>

    </div>
  )
}

export default PostFooter
