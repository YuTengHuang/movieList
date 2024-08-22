import DisplayItem from "../components/DisplayItem"
import { movieItems } from "../modules/ApiLinks"
import { CardStyle, MovieShowsPageWrapper } from "../styles/Style.modules"

const NowPlayingPage: React.FC  = () =>{

    const filterItem = movieItems.filter(item => item.name === '現正熱映')[0]

    return(
        <>
            <MovieShowsPageWrapper className="now-playing">
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
        </>
    )
}

export default NowPlayingPage