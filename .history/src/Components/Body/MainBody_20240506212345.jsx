
import Java from './Java'
import OtherCourses from './OtherCourses'
import ReactCourse from './ReactCourse'

import SpringBoot from './SpringBoot'

const MainBody = () => {
  async function data(){
    const fetchData=fetch('https://dummyjson.com/products/1')
    const data=(await fetchData).json.toString()
    console.log(data);
  }
  return (
    <div>
      {data()}

    </div>
  )
}

export default MainBody
