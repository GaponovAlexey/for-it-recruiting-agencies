import React, { useEffect, useState } from 'react'
const baseURL = 'http://jsonplaceholder.typicode.com/photos?'
export const Test = () => {
  const [posts, setPosts] = useState([])
  const [query, setquery] = useState('react')
  const [page, setpage] = useState(1)
  const [pageQty, setpageQty] = useState(0)

  useEffect(async () => {
    const res = await fetch(baseURL + `${page}`)
    const data = await res.json()
    setPosts(data)
  }, [page, query])

  return (
    <div>
      {posts.map((photo) => (
        <span>{photo.title}</span>
      ))}
    </div>
  )
}
