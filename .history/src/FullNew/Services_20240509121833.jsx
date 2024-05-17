// import React, { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import productsData from '../Components/Body/HomeBody/productsData';

// const Services = () => {
//     const params=useParams();
//     const [products,setProducts]=useState();
//     useEffect(() => {
//         setProducts(productsData);
//       }, []);
//   return (
//     <>
//       We Provides all these services
//       <h4>Welcome &nbsp;{params.services} to UI courses</h4>
//         <br /><br />
//         <h4> Just Launched...</h4>
//         <Link to={`/services/${products.title}`}>
//             <li>{products.title}</li>
//         </Link>
        
//     </>
//   )
// }

// export default Services