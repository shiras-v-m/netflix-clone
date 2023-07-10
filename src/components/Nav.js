import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

  const [show,setShow]=useState(false)
  useEffect(()=>{

    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  console.log(show)
  return (
    <div className={`nav ${show && "nav-black"}`}><img style={
        {
            width:'130px',
            padding:'10px'
        }
    } src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></div>
  )
}

export default Nav