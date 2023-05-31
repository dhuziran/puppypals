import {useState} from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
    <div className = 'container'>
      {puppies.map((el) => {
          return (
            <p onClick = {() => {setFeatPupId(el.id)}} key = {el.id}>
            {el.name}
            </p>
          )
        })}
        { featPupId && (
          <div className='feature-container'>
            <h2 className='featured'>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
          )}
    </div>
  )
}

export default App
