import { memo, useState } from "react";
import { Icon } from "../../icons/Icon";
import {motion} from "framer-motion"



export const SeasonCard=memo(({
    season,
    index,
    image,
    animate=true
})=>{

    const [hover,setHover]=useState(false)

    return <motion.div onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}  initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={animate?{delay:index*1,duration:1}:{delay:0,duration:0}} className=" h-full relative cursor-pointer  overflow-hidden " key={index}>
        <motion.img initial={{scale:1}} animate={hover?{scale:1.01}:{scale:1}}  className=" object-cover h-full " src={image}  alt={season}/>
        <motion.div initial={{opacity:0.7}} animate={hover?{opacity:1}:{opacity:0.7}}  className=" absolute top-0 left-0 flex justify-center items-center   bg-black bg-opacity-65 w-[96px] h-[96px] " >
            
            <Icon delay={ animate?index*1+1:0} fontLenth={2} name={season} />
        </motion.div>
        <motion.div initial={{y:100,x:100,opacity:0}} animate={hover?{y:0,x:0,opacity:1,rotate:-45}:{y:100,x:100,opacity:0}}  className=" absolute -rotate-45 bg-opacity-65 text-center text-white   -bottom-[100px] -right-[100px] w-[200px] h-[200px] bg-black  " >
            <p className=" text-2xl font-bold">{season}</p>
        </motion.div>
    </motion.div>

})
