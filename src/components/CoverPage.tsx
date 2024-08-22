import React, { useState } from "react"
import { Cover, SearchBar } from "../styles/Style.modules"
import { CoverProps } from "../types/types"
import { useNavigate } from "react-router-dom"

const CoverPage: React.FC<CoverProps> = ({title, description, headerImage, showSearch}) =>{

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/search', {
            state: {
                query: encodeURIComponent(searchQuery)
            }
        })

    }

    return (
        <Cover style={{backgroundImage: `url(${headerImage})`}}>
            <div className="coverText">
                <h2>{title}</h2>
                <h3>{description}</h3>
                {showSearch && (
                    <SearchBar>
                        <form onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                autoComplete="off" 
                                placeholder="尋找電影......" 
                                value={searchQuery}
                                onChange={(e)=>{
                                    setSearchQuery(e.target.value)
                                }}
                            />
                            
                            <input type="submit" value={"查詢"} />
                        </form>
                    </SearchBar>
                )}
            </div>
        </Cover>

    )
}

export default CoverPage