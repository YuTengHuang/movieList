import { NavbarWrapper } from "../styles/Style.modules"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { movieItems } from "../modules/ApiLinks";
import { useEffect, useState } from "react";

type DebounceType = (...args: unknown[]) =>  void


const Header = () =>{

    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    const debounce = (func: DebounceType, wait: number)=> {
        let timeout: number
        return (...args: unknown[]) => {
            clearTimeout(timeout)
            timeout = window.setTimeout(() => func.apply(args), wait)
        };
    }
    
    useEffect(()=>{

        const handleScroll = debounce(()=>{
            const scrollTop = window.scrollY || document.documentElement.scrollTop

            if (scrollTop > lastScrollTop){
                setIsHidden(true)
            }else{
                setIsHidden(false)
            }

            setLastScrollTop(scrollTop <= 0? 0 : scrollTop)
        }, 100)

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        
    }, [lastScrollTop])

    return (
        <NavbarWrapper className={`${isHidden? 'navHidden' : ''}`}>
            <Navbar data-bs-theme="dark" 
            collapseOnSelect expand="lg">
                <Container>
                    <NavLink className="logo navbar-brand" to="/">TMDB</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navLinks me-auto">
                            {movieItems.map((nav)=>(
                                <NavLink to={nav.link} className={'nav-link'} key={nav.name}>{nav.name}</NavLink>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavbarWrapper>
    )
}

export default Header