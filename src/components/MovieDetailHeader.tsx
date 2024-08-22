import React from "react"
import { ContentHeader, DetailContent, Info, MovieContent, MovieDetailWrapper, PrevPageButton, Trailer, VoteAverage, VoteCanvas } from "../styles/Style.modules"
import { baseBackDropURL, baseImgURL } from "../modules/ApiLinks"
import { Crew, Genre, MovieDetailHeaderProps } from "../types/types"
import CircleCanvas from "../components/CircleCanvas"
import { IoIosPlay } from "react-icons/io";
import { useNavigate } from "react-router-dom"
import { GrFormPreviousLink } from "react-icons/gr";


export const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({loading, isShow, setIsShow, result, crew}) =>{

    const navigate = useNavigate()

    const { 
        backdrop_path, genres, overview, 
        poster_path, release_date, tagline,
        title, vote_average, runtime
    } = result || {}
    
    const formatter = new Intl.DateTimeFormat("en", {
        year: "numeric",
    })

    const getDateTime = (dateString: string | number | Date | undefined) =>{
        if (!dateString) {
            return ''
        }
        const date = new Date(dateString)
        return formatter.format(date)
    }

    const getRunTime = (time: number | undefined) =>{
        if (!time){
            return ''
        }

        const hour: number = ~~(time / 60)
        const min: number = (time % 60)
        return hour + " 小時 " + min + " 分鐘"
    }

    const percenTage = (vote: number | undefined) =>{
        if(!vote){
            return 0
        }

        return (vote / 10) * 100
    }

    const toggleTrailer = ()=>{
        setIsShow(!isShow)
    }

    return (
        <MovieDetailWrapper className="movieDetailWrapper">
            
            <MovieContent className={`movieContent ${loading? 'loading': ''}`} $backImg={baseBackDropURL+backdrop_path}>
                
                <ContentHeader className="contentHeader">
                    <PrevPageButton title="上一頁">
                        <button onClick={()=> navigate(-1)}><GrFormPreviousLink /></button>
                    </PrevPageButton>
                    <div className="posterWrapper">
                        <img src={`${baseImgURL+poster_path}`} alt={`${title}`} />
                    </div>

                    <div className="detailContainer">
                        <DetailContent className="detailContent">
                            <div className="detailTitle">
                                <h2>
                                    {title}
                                    <span>({getDateTime(release_date)})</span>
                                </h2>
                                <Info className="info">
                                    <span className="release">{release_date}</span>
                                    <span className="genres">
                                        {genres?.map((item: Genre)=>{
                                            return (item.name) + " "
                                        })}
                                    </span>
                                    <span className="runtime">
                                        {getRunTime(runtime)}
                                    </span>
                                </Info>


                            </div>

                            <div className="voteAndTrailer">

                                <VoteAverage className="voteAverage">
                                    <VoteCanvas className="voteCanvas" style={{width: '68px', height: '68px'}}>
                                        <CircleCanvas percent={percenTage(vote_average)} radius={32} strokeWidth={5} />
                                        <div className="voteNumber">{percenTage(vote_average).toFixed(0)}<span style={{fontSize: "10px"}}>%</span></div>
                                    </VoteCanvas>
                                    <div className="voteAverageText">平均評分</div>
                                </VoteAverage>

                                <Trailer className="Trailer">
                                    
                                    <div className="trailerButton" onClick={toggleTrailer} title="播放">
                                        <span><IoIosPlay /></span>播放預告片
                                    </div>
                                    
                                </Trailer>

                            </div>

                            <div className="overViewAndCredits">
                                <h3 className="tagline">{ tagline }</h3>
                                <h3 dir="auto">概要</h3>
                                <div className="overView" dir="auto">
                                    {overview?(
                                        <p>{ overview }</p>
                                        ):(
                                        <p>沒有概要...</p>
                                        )
                                    }
                                </div>
                                <ol className="crew">
                                    {crew.map((item: Crew)=>(
                                        <li key={item.id}>
                                            <p>{item.name}</p>
                                            <p className="job">{item.job}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                        </DetailContent>
                    </div>
                </ContentHeader>
            </MovieContent>
            
        </MovieDetailWrapper>
    )
}

export default MovieDetailHeader