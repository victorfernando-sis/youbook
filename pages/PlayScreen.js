import React from 'react'
import { useRouter } from 'next/router'

const PlayScreen = () => {
  const router = useRouter()
  const { vid } = router.query


  return (
    <div>PlayScreen : {vid}</div>
  )
}

export default PlayScreen
