import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 28,
    "profession": "Software Engineer",
    "profile_pic": "https://i.pravatar.cc/250?u=aarav.mehta@example.com"
  },
  {
    "name": "Sara Thompson",
    "city": "New York",
    "age": 34,
    "profession": "Product Manager",
    "profile_pic": "https://i.pravatar.cc/250?u=sara.thompson@example.com"
  },
  {
    "name": "Kenji Tanaka",
    "city": "Tokyo",
    "age": 26,
    "profession": "UX Designer",
    "profile_pic": "https://i.pravatar.cc/250?u=kenji.tanaka@example.com"
  },
  {
    "name": "Lina Müller",
    "city": "Berlin",
    "age": 41,
    "profession": "Data Scientist",
    "profile_pic": "https://i.pravatar.cc/250?u=lina.mueller@example.com"
  },
  {
    "name": "Diego Alvarez",
    "city": "Buenos Aires",
    "age": 30,
    "profession": "Marketing Specialist",
    "profile_pic": "https://i.pravatar.cc/250?u=diego.alvarez@example.com"
  }
]

  
  return (
    <div>
      {users.map((elem) => {
        return <Card username = {elem.name} age={elem.age} prof = {elem.profession} image = {elem.profile_pic}/>
      })}
    </div>
  )
}

export default App
