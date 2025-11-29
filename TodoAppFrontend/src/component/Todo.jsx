import React from "react"

export const Todo= React.memo(({id,title,description,isCompleted,handleMarkAsDone})=>{

    return(
            <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'10%',margin:"5px"}}>
                <div style={{display:'flex',flexDirection:'column',border:'2px solid black',padding:'10px',width:'50%'}} onSubmit={(e)=> handleSubmit(e)}>
                    <span  style={{padding:"2px",margin:"1px",width:"100%",fontSize:"20px",fontWeight:'bold',textAlign:'center'}} >{title}</span>
                    <span  style={{padding:"2px",margin:"1px",width:"100%",fontSize:"17px",textAlign:'center'}} >{description}</span>
                    <button onClick={()=> handleMarkAsDone(id)} style={{fontSize:'17px',borderRadius:'2%',outline:'none',cursor:isCompleted ?'not-allowed':'pointer',width:"100%",padding:"2px",margin:"1px",color:'white',background: isCompleted ? "green" : "blue"}} disabled={isCompleted} >{isCompleted ? "Great Job !!" : "Mark As Complete !!"}</button>
                </div>
            </div>
    )
})
