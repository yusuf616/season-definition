


import {  useCallback, useEffect, useMemo, useReducer, useState } from "react"
import { GrPowerReset } from "react-icons/gr"
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"
import Typewriter from "typewriter-effect";
import { Icon } from "../icons/Icon";

export const Thanks=()=>{
    const [hover,setHover]=useState(false);
    const [update,setUpdate]=useState(false);

  
    const reducer=(state,action)=>{
        switch(action.type){
            case "add":
                state={
                    ...state,
                    passive:state.passive.slice(1,) ,
                    active:[...state.active,state.passive[0]],
                    type:state.passive.length===1?"delete":"add"
                }
                break;
            case "delete":
                state={
                    ...state,
                    active:state.active.slice(0,state.active?.length-1) ,
                    passive:[...state.passive,state.active[state.active?.length-1]],
                    type:state.active.length===1?"add":"delete"
                }
                break;
            default:
                break;
        }
        return state;
    }

    const[addedIcons,dispatch]=useReducer(reducer,{active:[],passive:["wainter","spring","summer","fall"],type:"add"});
    
    const getIconsCount=(a)=>{
        console.log("jjjj");
        return a?.length
    }


    const count=useMemo(()=>getIconsCount(addedIcons?.active),[addedIcons?.active]);




    


    




    const handleClick=useCallback(()=>{
        dispatch({type:addedIcons.type})
    },[addedIcons]);

    const handleRandom=useCallback(()=>{
        setUpdate(!update);
    },[update]);


    const navigate=useNavigate();


    return <div style={{ display:"flex" ,width:"100%",height:"100%",justifyContent:"center",alignItems:"center" }} className=" flex h-full w-full justify-center items-center   ">
        
        <div style={{textAlign:"center"}}>
            <Icon hover={true} onClick={handleRandom} name="random" />
            <Icon name="number" num={count} />
            <div style={{display:"flex",height:100,justifyContent:"center"}} >
                {addedIcons?.active?.map((icon,index)=><motion.div key={index} initial={{x:0,opacity:0.5}} animate={{x:0,opacity:1}} transition={{duration:1}}   ><Icon  delay={0} size={1} fontLenth={1.5} name={icon}/></motion.div>)}
                <Icon onClick={handleClick} name={addedIcons.type==="add"?"plus":"minus"} fontLenth={1.3} hover={true}   />
                
            </div>
            <div  style={{ fontSize:"30px",color:"#eee" }}  >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(50).typeString(" I hope you liked it :)").start();
                    }}
                />
                 
            </div>
            <div style={{display:"inline-block",marginTop:"24px" }} className=" inline-block mt-8 " >
                <motion.button style={{display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",fontSize:"16px",backgroundColor:"#6c7dba",color:"#eee",padding:8,border:"none" ,borderRadius:10 }}  initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}} onClick={()=>navigate("/")} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}   >
                    <motion.div initial={{rotate:0}} animate={{rotate:hover?360:0}} transition={{duration:0.5}}  ><GrPowerReset /></motion.div> <p style={{marginLeft:"10px"}}>Replay</p>  
                </motion.button>
            </div>
        </div>
    </div>
}
