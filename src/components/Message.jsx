import React from 'react'
import MessageHeaader from './MessageHeaader'
import MessageBody from './MessageBody'

const Message = () => {
  return (
    <div className=' px-4 md:px-8'>
        
        <MessageHeaader />
        <MessageBody />
    </div>
  )
}

export default Message