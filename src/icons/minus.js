
import {motion} from "framer-motion"
import { memo } from "react"

export const Minus=memo(({
    fontLenth
})=>{
    
    const circleVariant={
        hidden:{
            strokeWidth:2*fontLenth,
            pathLength: 0,
            fill:"#0000"
            
        },
        vizibel:{
            stroke:"#ff1515" ,
            strokeWidth:6*fontLenth,
            pathLength:1,
            transition:{
                strokeWidth:{delay:1,duration:0.6},
                pathLength:{duration:3,type:"spring"}
            }
        }
    }

    return <svg width={380} height={380} fill="#0000"  >
        <g  transform="translate(100,175) " fill="#000000" stroke="none">
            <motion.rect  variants={circleVariant} initial={"hidden"} animate={"vizibel"} width={180} rx="20" ry="20"  height={30}  />
        </g>
       
    </svg>
})

