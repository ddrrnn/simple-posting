import React from 'react'
import PostCards from '../../components/PostCards/PostCards'

const HomePage = () => {
  return (
    <div class="flex flex-col gap-3 ">
      <div class="flex justify-center items-centerflex-col gap-20 py-20">
          <PostCards />
      </div>
    </div>
  )
}

export default HomePage
