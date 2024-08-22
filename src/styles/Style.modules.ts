import styled, {createGlobalStyle} from "styled-components"

///// GlobalStyle Start
export const GlobalStyle = createGlobalStyle`

#root{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    background-color: #fff;
    margin-top: 65px;
    width: 100%;
}

body{
    top: 0;
    left: 0;
    background-color: rgb(3, 37, 65);
}
`
///// GlobalStyle End


///// Main Start
export const Main = styled.div`

width: 100%;

@media screen and (min-width: 1399.8px){
    max-width: 1300px;
}
`
///// Main End


///// Header.tsx Start
export const NavbarWrapper = styled.div`

font-family: "Archivo Black", sans-serif;
font-weight: 700;
font-style: normal;
position: fixed;
z-index: 999;
width: 100%;
height: 64px;
top: 0;
left: 0;
transition: top .2s linear;

&.navHidden{
    top: -69px;
}

.navbar{
    padding: 4px;
    width: 100%;
    background-color: rgb(3, 37, 65);
    text-align: center;
}

.logo{
    color: #fff;
    font-size: 2rem;
    letter-spacing: 5px;
    white-space: normal;
    background: linear-gradient(
        to right, 
        rgb(192, 254, 207), 
        rgb(1, 180, 228)
    );
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-link{
    color: #fff;
    margin-right: 14px;
    border: 1px solid transparent;
    border-radius: 8px;
    &:hover{
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    &.active{
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
}

.loginBtn{
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    cursor: pointer;
    &:active{
        color: #fff;
    }
}

@media screen and (max-width: 576px){
    .container{
        justify-content: center;
    }
    .logo{
        letter-spacing: 0;
        margin-right: 0;
    }
}
`
///// Header.tsx End


///// CoverPage.tsx Start

export const Cover = styled.div`
height: 360px;
background-position: center;
position: relative;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

.coverText{
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 30px 40px;
    font-size: 1.3rem;
    h2{
        text-transform: capitalize;
        font-weight: 700;
        font-size: 3rem;
    }
    h3{
        font-weight: 700;
        font-size: 2rem;
    }
}

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 360px;
    background-color: rgba(0,25,47,0.7);
    pointer-events: none;
}

@media screen and (max-width: 726px){
    .coverText{
        h2{
            font-size: 2rem;
        }
        h3{
            font-size: 1.5rem;
        }
    }
}
@media screen and (max-width: 576px){
    .coverText{
        h2{
            font-size: 1.5rem;
        }
        h3{
            font-size: 1rem;
        }
    }
}
`

export const SearchBar = styled.div`

width: 100%;
margin-top: 30px;
position: relative;

input{
    border-radius: 30px;
    height: 46px;
    border: 0;
}

input[type=text]{
    text-align: center;
    width: 100%;
    padding: 10px 20px;
    margin: auto;
    outline: none;
    color: rgba(0, 0, 0, .5);
}
::placeholder {
    color: grey;
    opacity: 0.5;
    font-weight: 800;
}

input[type=submit]{
    padding: 10px 26px;
    right: -1px;
    position: absolute;
    color: white;
    font-size: 1.2rem;
    text-shadow: 1px 1px 8px black;
    background: linear-gradient(
        to right,
        rgb(192, 254, 207), 
        rgb(1, 180, 228)
    );
}

@media screen and (max-width: 576px){
    text-align: center;

    input[type=submit]{
        margin-top: 10px;
        position: relative;
    }
}

`
///// CoverPage.tsx End


///// DisplayItems.tsx Start
export const MovieShowsHorizonWrapper = styled.div`

display: flex;
flex-direction: column;
padding: 20px 50px 20px 50px;

.movieHeading{
    font-family: 'Noto Sans TC', sans-serif;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    h1{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    > a{
        color: black;
        margin: 10px;
        text-decoration: none;
        transform: translate(0, 10px);
        transition: all .3s;
        font-weight: 800;
        &:hover{
            color: rgb(1, 180, 228);
        }
    }
}

.movieContainer {
    padding-bottom: 10px;
    display: flex;
    overflow-x: auto;
    padding: 10px 40px 10px 40px; 
}

@media screen and (max-width: 900px){

    .movieHeading{
        text-align: center;
        display: block;
    }

    .movieContainer, .loadingCard{
        padding: 10px 0;
    }
}
`
///// DisplayItems.tsx End


///// CardStyle Start

export const CardStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1400px;

    /***** scroll bar *****/
::-webkit-scrollbar {
    height: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid slategrey;
}

::-webkit-scrollbar-track {
    box-shadow: transparent;
    background-color: #eee
}
    /***** scroll bar *****/

.card, .loadingCard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    width: 15rem;
    border: 0;
    margin: 10px;
    transition: .3s ease-in-out;

    > .loadingImg, .card-img-top{
        height: 330px;
        width: 220px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 1px black;
        padding: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;

        .spinner-border{
            width: 50px;
            height: 50px;
        }
    }

    .card-body{
        padding: 0 1rem;
        text-align: center;
        width: 100%;
    }

    .card-title {
        font-size: 20px;
        font-weight: 800;
        cursor: pointer;
        width: 220px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        > a{
            text-decoration: none;
            color: black;
        }
    }

    .card-text{
        color: grey;
    }

    &:hover{
        transform: scale(1.03);
    }

}


.buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 10px;

    > .btnPrev{
        padding: 5px 20px 5px 20px;
        border: 0;
        border-radius: 8px;
        color: white;
        font-weight: 900;
        background-color: rgb(1,180,228);
        &:disabled{
            background-color: #ccc;
            cursor: no-drop;
        }
    }

    > p{
        margin: 0;
    }
}

@media screen and (max-width: 900px){
    .card{

        > img{
            height: 220px;
            width: 150px;
        }
        .card-title{
            width: 144px;
            font-size: 1.1rem;            
        }
    }
}

`
///// CardStyle End

///// LoadingPage Start
export const LoadingPage = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 65px);
> div{
    width: 150px;
    height: 150px;
}

`
///// LoadingPage End


///// VoteCanvas Start
export const VoteCanvas = styled.div`

display: flex;
justify-content: center;
align-items: center;
color: white;
border-radius: 50%;
font-size: 17px;
font-weight: bolder;
position: relative;

.voteNumber{
    z-index: 50;
}
`
///// VoteCanvas End


///// MovieShowsPageWrapper Start

export const MovieShowsPageWrapper = styled.div`
margin-top: 64px;
display: flex;
flex-direction: column;

.movieHeading{
    font-family: 'Noto Sans TC', sans-serif;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    font-weight: 800;
    h1{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}

.movieContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (max-width: 900px){
    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
`
///// MovieShowsPageWrapper End

///// MovieDetailWrapper Start

export const MovieDetailWrapper = styled.div`
/* margin-top: 64px; */
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
flex-direction: column;

`
///// MovieDetailWrapper End

///// MovieContent Start
export const MovieContent = styled.div<{$backImg: string}>`
width: 100%;
height: auto;
background-position: left calc((50vw - 170px) - 340px) top;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
flex-wrap: wrap;
position: relative;
background-image: url(${props => props.$backImg});

&::before{
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(
        to right, 
        rgba(0, 0, 0, 1) 
        calc((50vw - 170px) - 340px),
        rgba(0, 0, 0, 0.6) 50%,
        rgba(0, 0, 0, 0.8) 100%     
    );
}

&.loading::before{
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: none;
}
`
///// MovieContent End

///// ContentHeader Start
export const ContentHeader = styled.div`

z-index: 10;
padding: 30px 40px;
display: flex;
flex-wrap: nowrap;
height: 100%;
width: 100%;
max-width: 1400px;

.posterWrapper{
    width: 300px;
    height: 450px;
    display: flex;
    
    > img{
        border-radius: 8px;
    }
}

.detailContainer{
    color: white;
    display: flex;
}

@media screen and (max-width: 899.8px){
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .posterWrapper{
        justify-content: center;
        width: calc((100vw / 1.5));
        height: calc((100vw / 1.5));
    }
}
`
///// ContentHeader End


///// DetailContent Start

export const DetailContent = styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
box-sizing: border-box;
padding-left: 40px;

.detailTitle{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 24px;

    > h2{
        line-height: 1;
        font-size: 2.5rem;
        font-weight: 1000;
        width: 100%;

        span{
            opacity: 0.8;
            font-weight: 400;
        }
    }
}

.voteAndTrailer{
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
}

.overViewAndCredits{
    width: 100%;

    > h3{
        font-weight: 800;
        font-size: 1.5rem;
    }
    
    .tagline{
        font-size: 1.1rem;
        opacity: .7;
    }

    
    .overView{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    .crew{
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        list-style-type: none;

        li{
            width: 100%;
            flex-basis: 33%;
            margin-right: 0;
            text-align: left;
            box-sizing: border-box;
            padding-right: 20px;
            p{
                margin: 0;
                font-size: 1.1rem;
                font-weight: 1000;
            }
            .job{
                font-size: 0.8rem;
                font-weight: 400;
            }

            &:nth-child(n+4) p:first-child{
                padding-top: 20px;
            }
        }
    }
}

@media screen and (max-width: 899.8px){
    padding: 0;
    justify-content: center;
    
    .detailTitle{
        margin-top: 12px;
        margin-bottom: 12px;
        text-align: center;
        justify-content: center;
        > h2{
            font-size: 2rem;
        }
    }
    .voteAndTrailer{
        margin-bottom: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .overViewAndCredits{
        text-align: center;
        word-break: break-all;
        .crew{
            li{
                flex-basis: 50%;
                p{
                    font-size: 0.9rem;
                }
            }
        }
    }
}
`
///// DetailContent End

///// Info Start

export const Info = styled.div`
display: flex;
position: relative;
top: 0;
left: 0;

.release, .genres, .runtime{
    padding-left: 20px;
    position: relative;
    top: 0;
    left: 0;
    font-weight: 800;

    &::before{
        font-size: 1.1em;
        line-height: 1;
        content: "•";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 3px;
        left: 7px;
        display: inline-flex;
        align-items: flex-start;
    }
}

@media screen and (max-width: 899.8px){
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
`
///// Info End


///// VoteAverage Start

export const VoteAverage = styled.div`

display: flex;
justify-content: center;
align-items: center;
.voteAverageText{
    font-weight: 800;
    font-size: 20px;
    margin-left: 0.5rem;
}

`
///// VoteAverage End


///// Trailer Start
export const Trailer=styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;

.trailerButton{
    width: auto;
    height: auto;
    font-weight: 600;
    will-change: opacity;
    transition: linear .1s;
    cursor: pointer;
    margin-left: 10px;
    font-size: 1.25rem;

    &:hover{
        opacity: 0.6;
    }
}
`
///// Trailer End


///// ShowVideo Start
export const ShowVideo = styled.div<{ $isShow: boolean }>`
display: ${props => (props.$isShow ? 'flex' : 'none')};
justify-content: center;
align-items: center;
position: fixed;
width: 100%;
height: 100%;
z-index: 999;
flex-direction: column;
margin-top: -65px;

.closeBar{
    background-color: black;
    width: 70%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    color: white;
    font-weight: 800;
    font-size: 1.5rem;
    
    .closeBtn{
        cursor: pointer;
    }
}

.trailerBackground{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70%;
    aspect-ratio: 16 / 9; 
    overflow: hidden;
    background: black;

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
`
///// ShowVideo End


///// MovieMedia Start

export const MovieMedia = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
`
///// MovieMedia End


///// CreditsWrapper Start
export const CreditsWrapper = styled.div`
max-width: 1400px;
padding: 30px 40px;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;

@media screen and (max-width: 576px){
    flex-direction: column;
}
`
///// CreditsWrapper End


///// CreditsContent Start
export const CreditsContent = styled.div`
width: 100%;
margin-bottom: 20px;
border-top: 2px solid rgba(0,0,0,0.3);
.crew_wrapper{
    margin-top: 0;
    h5{
        font-size: 1rem;
        text-shadow: 0 0 1px;
        margin: 0;
    }
}

.crew_wrapper:nth-child(n+3){
    margin-top: 30px;
}

h3{
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 10px;
    span{
        opacity: 0.7;
        font-size: 1.2rem;
        text-align: center;
    }
}
ol{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;

    li{
        width: 100%;
        margin-top: 10px;
        flex: 0 0 auto;
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        > img{
            width: 66px;
            height: 66px;
            min-width: 66px;
            border-radius: 8px;
            background-color: lightgray;
        }

        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: auto;
            min-height: 68px;

            .info{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                padding-left: 14px;
                padding-right: 20px;
                width: 100%;
                p{
                    width: 100%;
                    margin: 0;
                    font-size: 0.8rem;
                    white-space: normal;
                    overflow: visible;
                    text-overflow: clip;
                }
                .name{
                    font-size: 1.1rem;
                    font-weight: 600;
                    text-shadow: 0 0 1px;
                }
            }
        }
    }
}
`
///// CreditsContent End


///// SearchPageWrapper Start
export const SearchPageWrapper = styled.div`
height: calc(100vh - 209px);
max-width: 1400px;
text-align: center;

@media screen and (max-width: 900px){
    height: calc(100vh - 180px);
}
`
///// SearchPageWrapper End

///// PrevPageButton Start
export const PrevPageButton = styled.div`
border: 0;
border-radius: 50%;
background-color: white;
margin-right: 30px;
z-index: 20;
width: 50px;
height: 50px;
button{
    width: 50px;
    height: 50px;
    border: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 576px){
    margin: 10px;
}
`
///// PrevPageButton End