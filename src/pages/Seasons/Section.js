import { memo } from "react"
import { Icon } from "../../icons/Icon"
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"


const paragraphs={
    "winter":[
        "Winter is the coldest and darkest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons",
        "winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather."
    ],
    "spring":[
        "Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer.",
        "There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa."
    ],
    "summer":[
        "Summer is the hottest and brightest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are the longest and darkness hours are the shortest, with day length decreasing as the season progresses after the solstice",
        "The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture"
    ],
    "fall":[
        "Autumn, also known as fall,[1] is one of the four temperate seasons on Earth. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere). Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably",
        "Day length decreases and night length increases as the season progresses until the winter solstice in December (Northern Hemisphere) and June (Southern Hemisphere). "
    ]
}



export const Section=memo(({
    season=""
})=>{
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variant={
        hidden:{
            y:100,
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                delay:0.5,
                duration:0.8,
                type:"tween",
                ease:"easeInOut"
            }
        }
    }
    return (<>
        <motion.div id={season} ref={ref} variants={variant} initial="hidden" animate={inView?"visible":"hidden"}   className={" relative  my-10   p-1   "} >
            <div className=" flex w-[70px] h-[70px] justify-center items-center " >
                <Icon name={season} size={1} />

            </div>
            {paragraphs[season].map((p,index)=><p key={index}  className=" text-lg text-gray-200">{p}</p>)}

        </motion.div>
    </>)
})