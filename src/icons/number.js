import {motion} from "framer-motion"
import { useEffect,  useState } from "react"


export const Number=({
    num=0,
})=>{

    

    const [update,setUpdate]=useState(false);
    const [myNumber,setMunumber]=useState(0);




    useEffect(()=>{
        setUpdate(true)
        const a=setTimeout(()=>{
            clearTimeout(a)
            setMunumber(num);
            setUpdate(false)
        },200);

        return ()=>{
            clearTimeout(a);
        }
    },[num]);


    return (<div style={{color:"#920ad3",width:380,height:380,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <motion.p  initial={{y:-50,opacity:0}} animate={!update?{y:0,opacity:1}:{y:-50,opacity:0}}  style={{fontSize:100,fontWeight:"bold"}}>{myNumber}</motion.p>
    </div>) 
}