import React, { useEffect, useState } from "react"
import { CreditsContent, CreditsWrapper, MovieDetailWrapper, MovieMedia } from "../styles/Style.modules"
import { Credits, Crew } from "../types/types"
import { baseMediaImgURL } from "../modules/ApiLinks"

export const MovieDetailMedia: React.FC<{credits: Credits}> = ({credits}) =>{
    
    const [crewData, setCrewData] = useState<Record<string, Crew[]>>({});

    useEffect(()=>{

        const crewType: Record<string, Crew[]> = {}
        credits.crew.forEach((item) => {
    
            const department = crewType[item.department] || (crewType[item.department] = [])
            const existItem = department.find(crewItem => crewItem.id === item.id)
            
            if(existItem){
                existItem.job += `, ${item.job}`       
            }else{
                department.push(item)
            }
        })
        setCrewData(crewType)

    }, [credits])
    
    return(
        <MovieDetailWrapper className="movieDetailWrapper">
            <MovieMedia className="movieMedia">
                <CreditsWrapper className="creditsWrapper">

                    <CreditsContent className="cast">
                        <h3>
                            演員陣容
                            <span> {credits.cast.length}</span>
                        </h3>
                        <ol>
                            {credits.cast.map((item)=>(
                                <li key={item.id}>
                                    <img
                                        src={item.profile_path ? baseMediaImgURL + item.profile_path : '/movieList/noimg.svg'}
                                        alt={item.name}
                                    />
                                    
                                    <div>
                                        <div className="info">
                                            <p className="name">{item.name}</p>
                                            <p>{item.character}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </CreditsContent>

                    <CreditsContent className="crew">
                        <h3>
                            製作群
                            <span> {credits.crew.length}</span>
                        </h3>
                        {Object.keys(crewData).map((department) => (
                            <div className="crew_wrapper" key={department}>
                                <h5>{department}</h5>
                                <ol>
                                {crewData[department].map((item) => (
                                    <li key={item.id}>
                                    <img
                                        src={item.profile_path ? baseMediaImgURL + item.profile_path : '/movieList/noimg.svg'}
                                        alt={item.name}
                                    />
                                    <div>
                                        <div className="info">
                                        <p className="name">{item.name}</p>
                                        <p>{item.job}</p>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ol>
                            </div>
                        ))}
                    </CreditsContent>

                </CreditsWrapper>
            </MovieMedia>
        </MovieDetailWrapper>
    )
}

export default MovieDetailMedia