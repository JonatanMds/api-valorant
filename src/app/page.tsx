'use client'
import Card from '@/components/Card'
import { useState } from 'react'

export default function Home() {

  const [agent, setAgent] = useState('')
  
  const handleSubmit=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setAgent('')
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <div className="flex flex-col items-center">
        <h1>Choose Your</h1>
        <h1>Favorite Agents</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          className="border-2 rounded" 
          placeholder='teste' 
          value={agent} 
          type='text' 
          onChange={(e)=>setAgent(e.target.value)}
        />
        <button className='bg-black rounded text-white' type='submit' disabled={agent? false : true}>Next</button>
      </form>
      <div className="flex flex-col">
        <ul className="flex items-center">
          <li>Agents</li>
          <li>Maps</li>
          <li>Arsenal</li>
        </ul>
        <div>
          <Card />
        </div>
      </div>
    </main>
  )
}
