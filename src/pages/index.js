import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/services';
import Footer from '../components/Footer';


function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} /> 
       <HeroSection />
       <InfoSection {...homeObjOne}/>
       <InfoSection {...homeObjTwo}/>
       <Services />
       <InfoSection {...homeObjThree}/>
       <Footer/>

       



    </>
  );
};

export default Home;