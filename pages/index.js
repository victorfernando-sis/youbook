import React from 'react'
import CardSlider from '../components/CardSlider'
import { useYoutubeContext } from '../context/YoutubeContext'
import Link from 'next/link'


const App = () => {
  const data = useYoutubeContext()
  console.log(data)
  return (
    <div>
      <CardSlider title="Latest Recommendation" data={data} />
      <CardSlider title="Latest Recommendation" />
    </div>
  )
}

// export const getServerSideProps = async () => {


//   localStorage.setItem("data", JSON.parse(data))

//   if (error) {
//     localStorage.clear()
//     console.log(error)
//   }

//   return {
//     // props: { products, bannerData }
//     props: { data }
//   }
// }

export default App