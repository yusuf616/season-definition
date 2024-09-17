import { useEffect, useState } from "react";
import "../styles/icons.css"
import { Fall } from "./fall";
import { Spring } from "./spring";
import { Summer } from "./summer";
import { Wainter } from "./wainter"
import {motion} from "framer-motion"
import { memo } from "react";
import { Plus } from "./plus";
import { Minus } from "./minus";
import { Random } from "./random";
import { Number } from "./number";


export const  Icon=memo(({
    name="wainter",
    size=1,
    fontLenth=1,
    animateY=0,
    animateX=0,
    delay=0,
    hover=false,
    onClick=()=>{},
    num=0
})=>{


    const [view,setView]=useState(false);
    const sizePexil=76;



    useEffect(()=>{
        const a=setTimeout(()=>{setView(true);clearTimeout(a)},delay*1000)
        return ()=>{clearTimeout(a)}
    },[]);


    const circleColors={
        "wainter":"#2EAEE2",
        "summer":"#FBD40E",
        "fall":"#F17528",
        "spring":"#47B94F",        
        "plus":"#94fffa",
        "minus":"#ff1515",
        "random":"#835af4",
        "number":"#920ad3"
    }
 
    const Icons={
        "wainter":<Wainter fontLenth={fontLenth}/>,
        "summer":<Summer fontLenth={fontLenth}/>,
        "fall":<Fall fontLenth={fontLenth}/>,
        "spring":<Spring fontLenth={fontLenth}/>,
        "plus":<Plus fontLenth={fontLenth} />,
        "minus":<Minus fontLenth={fontLenth} />,
        "random":<Random fontLenth={fontLenth}/>,
        "number":<Number num={num} />
    }



    const circleVariant={
        hidden:{
            strokeWidth:2*(fontLenth??0),
            pathLength: 0,
            fill:"#0000"
           
            
        },
        vizibel:{
            stroke:circleColors[name],
            strokeWidth:6*fontLenth,
            pathLength:1,
            transition:{
                strokeWidth:{delay:1,duration:0.6},
                pathLength:{duration:3,type:"spring"}
            }
        }
    }


    return <motion.div onClick={onClick} {...hover?{whileHover:{scale:1.02},whileTap:{scale:.8}}:{}} style={{cursor:hover?"pointer":"", width:sizePexil*size,height:sizePexil*size ,display:"inline-block",userSelect:"none" }}>
        {view&&<div style={{display: "flex",alignItems: "center",justifyContent:"center",height:"100%",width:"100%"}} >

            <div className=" icon " style={{scale:(size*.2)+""}} >
                <svg width={380} height={380} >
                    <motion.circle  variants={circleVariant}  initial={"hidden"}  animate="vizibel"   r={180} cy={190} cx={190}  />  
                </svg>
                
                <motion.div initial={{y:animateY*380,x:animateX*380,opacity:0.5}} animate={{y:0,x:0,opacity:1}} transition={{delay:1,duration:2}}  style={{position:"absolute" ,top:0,left:0}} >
                    {Icons?.[name]}
                </motion.div>
            </div>
        </div>}
    </motion.div>
     
})