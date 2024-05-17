
import OtherCourses from '../Components/Body/OtherCourses/OtherCourses'
import Java from '../Components/Body/Java/Java'
import SpringBoot from '../Components/Body/SpringBoot/SpringBoot'
import ReactCourse from '../Components/Body/React/ReactCourse'
import HomeBody from '../Components/Body/HomeBody/HomeBody'
const CouseRoutes =  [
    {path:'/java' ,component:Java},
    {path:'/springboot' ,component:SpringBoot},
    {path:'/reactcourse' ,component:ReactCourse},
    {path:'/othercourse' ,component:OtherCourses},
    {path:'/homebody' ,component:HomeBody}
]

export default CouseRoutes
