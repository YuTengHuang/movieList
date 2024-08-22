import { NavLink } from 'react-router-dom'
import CoverPage from '../components/CoverPage'
import DisplayItem from '../components/DisplayItem'
import { movieItems } from '../modules/ApiLinks'
import { MovieShowsHorizonWrapper, CardStyle, Main } from '../styles/Style.modules'
const HomePage: React.FC = () =>{

    const filterItems = movieItems.filter(item => item.name !== '首頁')

    return(
        <Main className='home-main'>
            <CoverPage 
                title={'welcome to movie data!'}
                description={'上百萬部電影、電視節目和人物在等你探索。立即瀏覽吧！'} 
                headerImage={'/movieList/coverpage.jpg'} 
                showSearch={true} 
            />

            {filterItems.map((item)=>{
                return(
                    <MovieShowsHorizonWrapper className='scrollbar' key={item.name}>
                        <div className="movieHeading">
                            <h1><strong>{item.name}</strong></h1>
                            <NavLink to={item.link}>{'更多'}</NavLink>
                        </div>
                        <CardStyle>
                            <DisplayItem
                                apiEndPoint={item.apiEndPoint}
                                numberOfMovies={15}
                                showButtons={false}
                            />
                        </CardStyle>
                    </MovieShowsHorizonWrapper>
                )
            })}
        </Main>
    )
}

export default HomePage