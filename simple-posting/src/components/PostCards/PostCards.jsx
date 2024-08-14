import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

const PostCards = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },2000)
    }, [])


  return (
    <div class="flex flex-col justify-center items-center gap-10">
        {isLoading &&
            [0,1,2,3].map((_, idx) => (
                <>
                    <div class="skeleton h-32 w-full"></div>
                </>
            ))
        }

        {!isLoading && (
            <>
            <PostCard 
            username="duranne"
            />
            <PostCard 
            username="arianagrande"
            />
            <PostCard 
            username="ambot"
            />
            </>
        )}
      
        
    </div>
  )
}

export default PostCards
