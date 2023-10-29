import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueriesData(["getById"])

  console.log(data);
  return (
    <div style={{display: 'flex', gap: '20px'}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/react-query"}>query</Link>
        <button>add từ xa</button>
    </div>
  )
}

export default Header