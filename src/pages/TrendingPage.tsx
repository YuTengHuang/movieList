import DisplayItem from "../components/DisplayItem"
import { movieItems } from "../modules/ApiLinks"
import { CardStyle, MovieShowsPageWrapper } from "../styles/Style.modules"

const TrendingPage: React.FC  = () =>{

    const filterItem = movieItems.filter(item => item.name === '熱門電影')[0]

    return(
        
        <MovieShowsPageWrapper className="trending">
            <div className="movieHeading">
                <h1><strong>{filterItem.name}</strong></h1>
            </div>
            <CardStyle style={{flexWrap: 'wrap', padding: '20px'}}>
                <DisplayItem
                    apiEndPoint={filterItem.apiEndPoint}
                    numberOfMovies={20}
                    showButtons={true}
                    key={filterItem.name}
                />
            </CardStyle>
        </MovieShowsPageWrapper>
    )
}

export default TrendingPage