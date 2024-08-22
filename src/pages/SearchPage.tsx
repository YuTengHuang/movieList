import React from "react"
import { CardStyle, MovieShowsPageWrapper, SearchPageWrapper } from "../styles/Style.modules"
import { searchItems } from "../modules/ApiLinks"
import DisplayItem from "../components/DisplayItem"
import { useLocation } from "react-router-dom"


export const SearchPage: React.FC = () =>{
    
    const location = useLocation()
    const query = location.state.query

    return(
        <MovieShowsPageWrapper className="search">
            <div className="movieHeading" style={query? {} : {justifyContent: "center"}}>
                <h1><strong>{searchItems.name}</strong></h1>
            </div>
            {query?(
                <CardStyle style={{flexWrap: 'wrap', padding: '20px'}}>
                    <DisplayItem
                        apiEndPoint={searchItems.apiEndPoint+`&query=${query}`}
                        numberOfMovies={20}
                        showButtons={true}
                        key={searchItems.name}
                    />
                </CardStyle>
            ):(
                <SearchPageWrapper>
                    <h1>沒有搜尋到任何電影</h1>
                </SearchPageWrapper>
            )}
        </MovieShowsPageWrapper>
    )
}

export default SearchPage