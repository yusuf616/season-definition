import { SeasonCard } from "./SeasonCard";

export const Seasons=()=>{

    const  seasons=["wainter","spring","summer","fall"];

    const images={
        "wainter":require("../../images/wainter.jpg"),
        "spring":require("../../images/spring.jpeg"),
        "summer":require("../../images/summer.jpg"),
        "fall":require("../../images/fall.jpg"),
    }

    return (<div className=" container m-auto   ">

        <div className=" h-[700px] overflow-hidden mt-24  grid grid-cols-4  w-full   " >
            {seasons.map((season,index)=><SeasonCard animate={true} index={index} image={images[season]} season={season} />)}
        </div>


    </div>)
}