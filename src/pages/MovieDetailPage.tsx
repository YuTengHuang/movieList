import React, { useEffect, useState } from "react"
import axios from "axios"
import MovieDetailHeader from "../components/MovieDetailHeader"

import { Spinner } from "react-bootstrap"
import { LoadingPage, ShowVideo } from "../styles/Style.modules"
import { useParams } from "react-router-dom"
import { apiKey, MovieDetailUrl } from "../modules/ApiLinks"
import { Cast, Crew, MovieResult } from "../types/types"
import { IoIosClose } from "react-icons/io";
import { useMovie } from "../useHook/useHook"
import MovieDetailMedia from "../components/MovieDetailMedia"


const MovieDetailPage: React.FC = () =>{

    const { id } = useParams<{id: string}>()
    const { loading, setLoading, credits, setCredits } = useMovie()  // 全體人員

    const [ youtubeKey, setYoutubeKey ] = useState('')
    const [ result, setResult ] = useState<MovieResult | null>(null)
    const [ isShow, setIsShow ] = useState(false)
    const [ crew, setCrew ] = useState<Crew[]>([])

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })
        const getMovieData = async()=>{
            setLoading(true)
            try{
                /**
                 * 取得原始資料
                */
                const response = await axios.get(
                    `${MovieDetailUrl}/${id}?language=zh-TW&api_key=${apiKey}&append_to_response=videos,credits`
                )
                setResult(response.data)

                /**
                 * 預告片key取得(Trailer優先)(Teaser其次)
                 */
                const { videos } = response.data
                let  trailerKey = videos.results.find(
                    (videos: { type: string }) => videos.type === "Trailer"
                )?.key || videos.results.find(
                  (videos: { type: string }) => videos.type === "Teaser"
                )?.key || ""      

                //無中文預告則取得英文
                if(videos.results.length === 0){
                    const response = await axios.get(
                        `${MovieDetailUrl}/${id}?language=en-US&api_key=${apiKey}&append_to_response=videos`
                    )

                    const { videos } = response.data
                    trailerKey = videos.results.find(
                        (videos: { type: string }) => videos.type === "Trailer"
                    )?.key || 
                    videos.results.find(
                        (videos: { type: string }) => videos.type === "Teaser"
                    )?.key || ""
                }
                setYoutubeKey(trailerKey)
                
                /**
                 * 分類演員、製作人員
                 */
                const { cast, crew } = response.data.credits
                const castData = cast.map((credit: Cast) => ({
                    id: credit.id,
                    name: credit.name,
                    character: credit.character,
                    profile_path: credit.profile_path,
                }))

                const crewData = crew.map((credit: Crew) => ({
                    id: credit.id,
                    name: credit.name,
                    job: credit.job,
                    department: credit.department,
                    profile_path: credit.profile_path,
                }))
                setCredits({ cast: castData, crew: crewData })

                /**
                 * 過濾製作人員名單 (顯示主要人員名單)
                 */
                const filterCrew = Object.values(crew.reduce((acc: Record<number, Crew>, member: Crew) =>{
                    if (member.department === "Directing" || member.department === "Writing"){
                        if (!acc[member.id]){
                            acc[member.id] = {...member}
                        }else{
                            acc[member.id].job += `, ${member.job}`
                        }
                    }

                    return acc
                }, {}))
                setCrew(filterCrew as Crew[])
                setLoading(false)

            }catch(error){
                console.log(error)
            }
        }

        if(id){ getMovieData() }

    }, [id, setCredits, setLoading])
    
    const toggleTrailer = ()=>{
        setIsShow(!isShow)
    }

    return (
        <>  
            {loading?(
                <LoadingPage className="loadingImg">
                    <Spinner animation="border" variant="secondary"/>
                    <h1>讀取中...</h1>
                </LoadingPage>
                ):(
                <>
                    <MovieDetailHeader
                        loading={loading} 
                        isShow={isShow} 
                        setIsShow={setIsShow} 
                        crew={crew} 
                        result={result}
                    />
                    <MovieDetailMedia credits={credits}/>
                </>
            )}

            <ShowVideo $isShow={isShow}>
                <div className="closeBar">
                    <span>播放預告片</span>
                    <IoIosClose className="closeBtn" style={{width: '30px', height: '30px'}} onClick={toggleTrailer} title="關閉"/>
                </div>
                <div className={`trailerBackground `}>
                    {isShow && youtubeKey?(
                        <iframe id="vi" width="auto" height="auto" src={`https://www.youtube.com/embed/${youtubeKey}`} allowFullScreen></iframe>
                    ):(
                        <h1 style={{color: "white"}}>沒有影片...</h1>
                    )}
                </div>
            </ShowVideo>
        </>
    )
}

export default MovieDetailPage