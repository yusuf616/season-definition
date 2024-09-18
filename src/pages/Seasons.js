


export const Seasons=()=>{

    const  seasons=["wainter","spring","summer","fall"];

    const images={
        "wainter":require("../images/wainter.jpg"),
        "spring":require("../images/spring.jpeg"),
        "summer":require("../images/summer.jpg"),
        "fall":require("../images/fall.jpg"),
    }

    return (<div className="   ">

        <div className=" h-[300px] flex w-full md:px-4 lg:px-8 xl:px-16 2xl:px-32  " >
            {seasons.map((season,index)=><img className=" object-cover h-full " src={images[season]} key={index} alt={season}/>)}
        </div>


    </div>)
}