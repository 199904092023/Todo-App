import React from 'react'

const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  return (
     <div style={{marginTop:20,fontSize:'16px',borderRadius:'10%',outline:'none',padding:"5px",color:'white',background:'blue',display:'flex', justifyContent:'center',alignItems:'center', height:'4vh' ,boxShadow:"2px 3px 6px 2px rgba(0, 0, 0, 0.3)"}}>
         © {startYear} – {currentYear} Todo App. All rights reserved.
    </div>
  )
}

export default Footer