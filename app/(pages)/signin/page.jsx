import SignIn from '@/app/components/signin'
import React from 'react'

const signin = ({ providers }) => {
  return (
    <div>
        <SignIn providers={providers} />
    </div>
  )
}

export default signin