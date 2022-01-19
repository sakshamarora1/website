import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import ProjectSection from '../components/ProjectSection/ProjectSection';

function Home() {

    const [scroll,setScroll] = React.useState(0);


    React.useEffect(()=>{
        window.addEventListener('scroll',()=>{
            console.log(window.scrollY);
            setScroll(window.scrollY);
        })
    },[])



    return (
        <div>
            <Header scroll={scroll}/>
            <Hero/>
            <About/>
            <Banner/>
            <ProjectSection/>
        </div>
    )
}

export default Home