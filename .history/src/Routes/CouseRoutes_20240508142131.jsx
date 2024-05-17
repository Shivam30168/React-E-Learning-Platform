import React from 'react'
import OtherCourses from '../Components/Body/OtherCourses/OtherCourses'
import Java from '../Components/Body/Java/Java'
import SpringBoot from '../Components/Body/SpringBoot/SpringBoot'
import ReactCourse from '../Components/Body/React/ReactCourse'

const CouseRoutes = () => [
  {path:'/othercourse' ,component:OtherCourses},
  {path:'/java' ,component:Java},
  {path:'/springboot' ,component:SpringBoot},
  {path:'/reactcourse' ,component:ReactCourse},
]

export default CouseRoutes
