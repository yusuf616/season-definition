import { motion } from "framer-motion"
import { Icon } from "../seasons/Icon"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";




export const Home=()=>{

    const navigate=useNavigate();



    useEffect(()=>{
        const a=setTimeout(()=>{
            clearTimeout(a)
            navigate("/thanks")
        },6000);

        return ()=>{
            clearTimeout(a)
        }

    },[]);


    return <motion.div initial={{scale:.4,opacity:1}} animate={{scale:6,opacity:0,transition:{opacity:{delay:5,duration:0.5},scale:{delay:5,duration:1}}}}   style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}} >
        <div  style={{width:380*2}}>
            <motion.div initial={{scale:0.5}} animate={{scale:1}} transition={{delay:3,duration:1,type:"spring"}} style={{display:"inline-block"}}>
                <Icon name="wainter" fontLenth={1} animateY={-0.5} animateX={-0.5} size={5} />
            </motion.div >
            <motion.div initial={{scale:0.5}} animate={{scale:1}} transition={{delay:3,duration:1,type:"spring"}} style={{display:"inline-block"}}>
                <Icon name="summer" fontLenth={1} animateY={-0.5} animateX={0.5} size={5} />

            </motion.div>
            <motion.div initial={{scale:0.5}} animate={{scale:1}} transition={{delay:3,duration:1,type:"spring"}} style={{display:"inline-block"}}>
                <Icon name="spring" fontLenth={1} animateY={0.5} animateX={-0.5} size={5} />
            </motion.div>
            <motion.div initial={{scale:0.5}} animate={{scale:1}} transition={{delay:3,duration:1,type:"spring"}} style={{display:"inline-block"}}>
                <Icon name="fall" fontLenth={1} animateY={0.5} animateX={0.5} size={5} />
            </motion.div>
        </div>
    </motion.div>  
}