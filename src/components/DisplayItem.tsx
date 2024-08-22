import { useEffect, useRef, useState } from "react"
import { DataProps, Movie } from "../types/types"
import { baseImgURL } from "../modules/ApiLinks"
import { Card , CardTitle} from "react-bootstrap"
import axios from "axios"
import LoadingCard from "./LoadingCard"
import CircleCanvas from "./CircleCanvas"
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import { VoteCanvas } from "../styles/Style.modules"
import { useMovie } from "../useHook/useHook"


const DisplayItem: React.FC<DataProps> = ({
    apiEndPoint, 
    numberOfMovies, 
    showButtons, 
}) =>{
    const [showItems, setShowItems] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const { loading, setLoading } = useMovie()

    const location = useLocation()

    useEffect(()=>{

        const getMovies = async()=>{
            setLoading(true)
            try{
                const response = await axios.get(`${apiEndPoint}`, {
                    params: {
                        page: currentPage
                    }
                })
            
                const { results, total_pages } = response.data
                
                setShowItems(results.slice(0, numberOfMovies))
                setTotalPage(total_pages)
                setLoading(false)
        
            }catch(error){
                console.log("Error: ", error)
            }
        }

        getMovies()
    }, [currentPage, apiEndPoint, numberOfMovies, setLoading])
    
    ////// horizon scroll
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current
        
        if (!container) return;
        ///// 只有首頁的橫向滾動
        if(location.pathname === '/'){

            const handleWheel = (e: WheelEvent) => {
                e.preventDefault()
                container.scrollTo({
                    left: container.scrollLeft += e.deltaY,
                    behavior: 'smooth'
                })
            }

            container.addEventListener('wheel', handleWheel)
            return () => container.removeEventListener('wheel', handleWheel)
            
        }
    }, [location.pathname])


    ////// format Date
    /**
     * Intl.DateTimeFormat.format 與 Date.toLocaleString 差異
     * 
     * Intl.DateTimeFormat的重複使用時效能較好
     * toLocaleString 使用簡單、適合不需要頻繁格式化的時候
     */

    const formatter = new Intl.DateTimeFormat("zh-TW", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    })

    const getDateTime = (dateString: string | number | Date) =>{
        const date = new Date(dateString)

        if(isNaN(date.getTime())){
            return "NaN"
        }
        
        return formatter.format(date)
    }
    
    const switchPage = (goto: 'prev' | 'next') =>{
        if (goto === 'prev' && currentPage > 1 ){
            setCurrentPage((prevPage)=> prevPage - 1)
        }else if (goto === 'next' && currentPage < totalPage ){
            setCurrentPage((nextPage)=> nextPage + 1)
        }
        window.scrollTo({
            top: 0,
            behavior: "instant",
        })

    }

    const loadingCardNum = 20
    const cards = Array(loadingCardNum).fill(null)

    return (
        <>  
            <div className='movieContainer' ref={containerRef}>
                {loading? (
                    cards.map((_, index) => (
                        <LoadingCard key={index}/>
                    ))
                ):(
                    showItems.map((item)=>{
                        const percentage = (item.vote_average / 10) * 100
                        return(
                            <Card key={item.id}>
                                <NavLink to={`/movie/${item.id}`}>
                                    <Card.Img variant="top" src={item.poster_path? baseImgURL+item.poster_path : "/movieList/noimg.svg"} />
                                </NavLink>
                                <VoteCanvas style={{width: '60px', height: '30px', right: '50px', bottom: '20px'}}>
                                    <CircleCanvas percent={percentage} radius={28} strokeWidth={5} />
                                    <div className="voteNumber">{percentage.toFixed(0)}<span style={{fontSize: "10px"}}>%</span></div>
                                </VoteCanvas>
                                <Card.Body>
                                    <CardTitle><NavLink to={`/movie/${item.id}`}>{item.title}</NavLink></CardTitle>
                                    <Card.Text>
                                        {getDateTime(item.release_date)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                )}
            </div>
            {showButtons && (
                <div className="buttons">
                    {currentPage > 0 && (
                        <button className="btnPrev" onClick={()=> switchPage("prev")} disabled={currentPage === 1? true : false}>
                            上一頁
                        </button>
                    )}
                    <p>
                        第 <b>{currentPage}</b> 頁
                    </p>
                    {currentPage <= totalPage && (
                        <button className="btnPrev" onClick={() =>switchPage("next")} disabled={currentPage === totalPage? true : false}>
                            下一頁
                        </button>
                    )}
                </div>
            )}
        </>
    )
}

export default DisplayItem