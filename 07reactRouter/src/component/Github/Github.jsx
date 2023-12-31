import { useState } from "react"
import { useEffect } from "react"

const Github = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/prashant-yadav-ninja')
        .then((response)=> response.json())
        .then( data => setData(data) )
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    </div>
  )
}

export default Github
