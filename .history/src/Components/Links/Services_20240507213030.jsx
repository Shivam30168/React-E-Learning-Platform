import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Services = () => {
    const params=useParams();
  return (
    <>
       <Link to="/java">
          <li>Java</li>
        </Link>
        <Link to="./react">
          <li>React</li>
        </Link>
        <Link to="./springboot">
          <li>Spring Boot</li>
        </Link>
        <Link to="./othercourses">
          <li>Other Courses</li>
        </Link>
    </>
  )
}

export default Services
