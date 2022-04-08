import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(res => {
      setPosts(res.data)
    })
  }, [])

  return (
    <div>
      {
        posts.map(post => <li key={post.id}>{post.title}</li>)
      }
    </div>
  )
}

export default ApiFetch