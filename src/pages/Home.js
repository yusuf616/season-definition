import { motion } from "framer-motion"
import { Icon } from "../icons/Icon"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { routes } from "../routes";




export const Home=()=>{

    const navigate=useNavigate();



    useEffect(()=>{
        const a=setTimeout(()=>{
            clearTimeout(a)
            navigate(routes?.seasons)
        },6000);

        return ()=>{
            clearTimeout(a)
        }

    },[]);

    const icons={
        "wainter":{
            animateX:-.5,
            animateY:-.5
        },
        "summer":{
            animateX:.5,
            animateY:-.5  
        },
        "fall":{
            animateX:-.5,
            animateY:.5
        },
        "spring":{
            animateX:.5,
            animateY:.5
        }
    }


    return <motion.div initial={{scale:.4,opacity:1}} animate={{scale:6,opacity:0,transition:{opacity:{delay:5,duration:0.5},scale:{delay:5,duration:1}}}}   style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}} >
        <div  style={{width:380*2}}>
            {
                Object.entries(icons).map((icon,index)=><motion.div initial={{scale:0.5}} animate={{scale:1}} transition={{delay:3,duration:1,type:"spring"}} style={{display:"inline-block"}}>
                    <Icon name={icon[0]} fontLenth={1} animateY={icon[1].animateY} animateX={icon[1].animateX} size={5} />
                </motion.div >)
            }
        </div>
    </motion.div>  
}