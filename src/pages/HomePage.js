import React from "react";
import { SocialHeader,ContactHeader,Navigation} from "../components/headers";
import { Hero } from '../components/hero';
import { About } from '../components/aboutus';
import { Services,CompanySkills} from '../components/services';
import { TeamMembers,FAQ} from '../components/teams';
import { Footer } from '../components/footer';
import { Expert } from "../components/Expert/Expert";

export const Homepage = () =>{
    return(
        <>
         <SocialHeader/>
            <ContactHeader/>
            <Navigation/>
            
            <Hero/>
            <Expert/>

            <About/>
            <Services/>
            <TeamMembers/>
            <FAQ/>
            <CompanySkills/>
            {/* <CustomerFeedback/> */}
            {/* <ClientsList/> */}
            <Footer/>
        </>
    )
}