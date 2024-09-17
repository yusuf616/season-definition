

import {motion} from "framer-motion"
import { memo } from "react"

export const Plus=memo(({
    fontLenth
})=>{
    
    const circleVariant={
        hidden:{
            strokeWidth:2*fontLenth,
            pathLength: 0,
            fill:"#0000"
            
        },
        vizibel:{
            stroke:"#94fffa" ,
            strokeWidth:6*fontLenth,
            pathLength:1,
            transition:{
                strokeWidth:{delay:1,duration:0.6},
                pathLength:{duration:3,type:"spring"}
            }
        }
    }

    return <svg width={380} height={380} fill="#0000"  >
        <motion.path transform="translate(-60,-110)" variants={circleVariant} initial={"hidden"} animate={"vizibel"} d="M 241.99219,407.91016 L 241.99219,310.44922 L 144.72656,310.44922 L 144.72656,294.43359 L 241.99219,294.43359 L 241.99219,197.36328 L 257.61719,197.36328 L 257.61719,294.43359 L 355.27344,294.43359 L 355.27344,310.44922 L 257.61719,310.44922 L 257.61719,407.91016 L 241.99219,407.91016 z" /> 
    </svg>
})