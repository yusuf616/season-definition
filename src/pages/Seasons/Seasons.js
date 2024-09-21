import { useState } from "react";
import { Icon } from "../../icons/Icon";
import { SeasonCard } from "./SeasonCard";
import { Section } from "./Section";
import {motion} from "framer-motion"
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";
import { routes } from "../../routes";
export const Seasons=()=>{

    const  seasons=["winter","spring","summer","fall"];
    const [hover,setHover] =useState(false);
    const navigate=useNavigate();
  

    const images={
        "winter":require("../../images/winter.jpg"),
        "spring":require("../../images/spring.jpeg"),
        "summer":require("../../images/summer.jpg"),
        "fall":require("../../images/fall.jpg"),
    }

    return (<div className=" container m-auto    ">
         <div style={{display:"inline-block",marginTop:"24px" }} className=" inline-block mt-8 " >
            <motion.button style={{display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",fontSize:"16px",backgroundColor:"#6c7dba",color:"#eee",padding:8,border:"none" ,borderRadius:10 }}  initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}} onClick={()=>navigate("/thanks")} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}   >
                <motion.div initial={{rotate:0}} animate={{rotate:hover?360:0}} transition={{duration:0.5}}  ><FaRightLong /></motion.div> <p style={{marginLeft:"10px"}}>Thanks Page</p>  
            </motion.button>
        </div>
        <div className=" h-[600px] overflow-hidden my-24  grid grid-cols-4  w-full   " >
            {seasons.map((season,index)=><a href={"#"+season}><SeasonCard animate={true} index={index} image={images[season]} season={season} /></a>)}
        </div>


        <div className="   relative  mb-10 ">
            {
                seasons.map((season,index)=><Section key={index}  season={season} />)
            }

        </div>


    </div>)
}