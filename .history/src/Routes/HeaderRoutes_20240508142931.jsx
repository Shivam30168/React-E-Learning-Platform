import React from 'react'
import MainBody from '../Components/Body/Layout/MainBody'
import About from '../Components/About/About'
import NotFound from '../Components/NotFound/NotFound'

const HeaderRoutes = [
    {path:'/',component:MainBody},
    {path:'/home',component:MainBody},
    {path:'/about',component:About},
    {path:'/*',component:NotFound}
]

export default HeaderRoutes
