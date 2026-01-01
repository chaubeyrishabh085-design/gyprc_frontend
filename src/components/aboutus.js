import React from 'react';
import styles from '../styles/aboutus.module.css';
import { ServiceCard } from './cards';

const cdate=new Date();
let year=cdate.getFullYear();

export const About=()=>{
    const cardsData=[
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Educational Services",
            link:"https://teachercool.com/",
            desc:"We are one-stop destination for academic excellence and support. We are passionate about empowering students to achieve their educational goals and reach their full potential. ",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Web Develpoment ",
            link:"#",
            desc:"We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical expertise.",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Digital Marketing",
            link:"#",
            desc:"We are top digital marketing agency in Delhi. The company's marketing services are aimed at delivering measurable Transformational Growth to enterprises.",
        }
    ]
    return(
        <>
            <div className={styles.aboutSec} id="about">
                <section className={styles.aboutService}>
                    {
                        cardsData.map((data,index)=>{
                            return <ServiceCard key={index} data={data}/>
                        },this)
                    }
                    
                </section>
                <section className={styles.aboutContent}>
                    <img src={process.env.PUBLIC_URL+"/images/metting.jpg"} width="400px" alt='img'/>
                    <div className={styles.aboutData}> 
                        <p style={{color:"#0E5AF2",fontWeight:"bold"}}>GET BEST IT & NON IT SOLUTION {year}</p>
                        <h2>TRUST OUR BEST IT & NON IT SOLUTION FOR YOUR BUSINESS</h2><br/>
                        <p>GYPR is your one-stop destination for academic excellence and support. We are passionate about empowering students to achieve their educational goals and reach their full potential. Whether you need help with homework, exam preparation, or mastering complex concepts, our tutors are ready to guide you every step of the way.
                        </p><br/>
                        <a href='/'>ABOUT US</a>
                    </div>
                </section>
            </div>
        </>
    );
};