import React from 'react'

export default function StoryAvatar({profileImageUrl}) {
  return (
    <div className='rounded-full border-blue-500 border-4 w-10 h-10'>
        <img src={profileImageUrl? profileImageUrl: '/images/sokpheng.jpg'} alt='profile' className='w-full h-full object-cover rounded-full'/>
    </div>
  )
}
