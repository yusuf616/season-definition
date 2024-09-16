


import { useState } from "react"
import { GrPowerReset } from "react-icons/gr"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"
import Typewriter from "typewriter-effect";
import { Icon } from "../seasons/Icon";


export const Thanks=()=>{
    const [hover,setHover]=useState(false)
    const navigate=useNavigate();
    const icons=[
        "wainter","spring","summer","fall"
    ]
    return <div style={{ display:"flex" ,width:"100%",height:"100%",justifyContent:"center",alignItems:"center" }} className=" flex h-full w-full justify-center items-center   ">
        <div style={{textAlign:"center"}}>
            <div style={{display:"flex",height:100,justifyContent:"center"}} >
                {icons?.map((icon,index)=><motion.div key={index} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1*index}}   ><Icon delay={index} size={1} name={icon}/></motion.div>)}
            </div>
            <motion.p  style={{ fontSize:"30px",color:"#eee" }}  >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50).typeString(" I hope you liked it :)").start();
                    }}
                />
                 
            </motion.p>
            <div style={{display:"inline-block",marginTop:"24px" }} className=" inline-block mt-8 " >
                <motion.button style={{display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",fontSize:"16px",backgroundColor:"#6c7dba",color:"#eee",padding:8,border:"none" ,borderRadius:10 }}  initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}} onClick={()=>navigate("/")} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}   >
                    <motion.div initial={{rotate:0}} animate={{rotate:hover?360:0}} transition={{duration:0.5}}  ><GrPowerReset /></motion.div> <p style={{marginLeft:"10px"}}>Replay</p>  
                </motion.button>
            </div>
        </div>   
    </div>
}
