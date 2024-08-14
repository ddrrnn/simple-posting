import React from 'react'

const PostHeader = ({username}) => {
  return (
    <div class="flex justify-between">
      <div class="text-[12px] font-bold">{username}</div>
      <div class="text-[12px] text-gray-500 font-light">time</div>
    </div>
  )
}

export default PostHeader
