import React from 'react';
import styles from '../styles/services.module.css';
import { ServiceCard2,FeedbackCard,FooterCard} from './cards';
export const Services=()=>{
    const cardsData=[
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Educational Support",
            desc:"Educational support Services.You can find solutions to all your queries of the subjects from the world's best experts in a very easy and understandable manner.",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Application Develpoment",
            desc:"We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical expertise.",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Digital Marketing",
            desc:"We are top digital marketing agency in Delhi. The company's marketing services are aimed at delivering measurable Transformational Growth to enterprises.",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"PPC / Paid marketing",
            desc:"Positioning your website in the first place on Google is our commitment. We always put our best foot forward to accomplish our goals.",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Research",
            desc:"Research Paper Writing Services, longer and more detailed Research, designed",
        },
        {
            img:process.env.PUBLIC_URL+"/images/laptop.png",
            title:"Homework Help",
            desc:"Study and get any kind of help in your homework from 100+ million step-by-step explanations with expert Q&As, minimal plagiarism and experts' support 24*7.",
        }
    ]
    return(
        <>
            <div className={styles.serviceContainer} id="service">
            <section className={styles.dataService}>
                <p>OUR LATEST SERVICES</p>
                <h1>WHAT KIND OF SERVICES <br/>WE ARE OFFERING</h1>
            </section>
            <section className={styles.servicCards}>
                {
                    cardsData.map((value,index)=>{
                        return <ServiceCard2 key={index} data={value}/>
                    },this)
                }
                </section>
            </div>
            <div className={styles.banner}>
                <diV>
                    <p style={{marginTop:"20px"}}>WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7</p>
                    <h1>NEED A CONSULTATION?</h1>
                    <a href="https://teachercool.com/" className={styles.cntBtn}>Connect</a>
                </diV>
            </div>
        </>
    );
};

export const CompanySkills=(props)=>{
    const skills=[
        {
            title:"Project Completion",
            progress:"95",
        },
        {
            title:"Application Develpoment",
            progress:"97",
        },
        {
            title:"Student Support",
            progress:"98",
        },
        {
            title:"AI Tools Develpoment",
            progress:"94",
        }
    ];
    const bannerData=[
        {
            img:process.env.PUBLIC_URL+"/images/progress.png",
            title:"100+",
            desc:"SUCCESSFUL PROJECTS"
        },
        {
            img:process.env.PUBLIC_URL+"/images/progress.png",
            title:"1000+",
            desc:"Assignments"
        },
        {
            img:process.env.PUBLIC_URL+"/images/progress.png",
            title:"60+",
            desc:"SKILLED EXPERTS"
        },
        {
            img:process.env.PUBLIC_URL+"/images/progress.png",
            title:"100+",
            desc:"HAPPY CLIENTS"
        }
    ];
    return(
        <>
            <div className={styles.skillContainer}>
                <section className={styles.skill}>
                    <b>THE GREAT COMPANY SKILL</b>
                    <h2>CONNECTING PEOPLE AND <br/>BUILD TECHNOLOGY</h2>
                    <p>
                        Energistically evisculate an expanded array of meta-services after cross-media strategic theme areas.   Interactively simplify interactive customer service before fully tested relationship parallel task high   standards...
                    </p>
                </section>
                <section className={styles.skillBar}>
                    {
                        skills.map((values,index)=>{
                            return <div key={index} >
                                <p><span>{values.title}</span> <span>{values.progress}%</span></p>
                                <progress  value={values.progress} max="100"></progress>
                            </div>
                        })
                    }
                    
                    
                </section>
            </div>
            <div className={styles.banner}>
                    {
                        bannerData.map((value,index)=>{
                            return <FooterCard data={value} key={index}/>
                        })
                    }
            </div>
        </>
    );
};

export const CustomerFeedback=()=>{
    const feeds=[
        {
            name:"Raju",
            desg:"Web Customer",
            desc:"Greate service and on time project handover , try various company but this one has unique , they used new tools and technology for developing application. "
        },
        {
            name:"Daniel Desuja",
            desg:"SEO Customer",
            desc:"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },
        {
            name:"Daniel Desuja",
            desg:"SEO Customer",
            desc:"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },
        {
            name:"Daniel Desuja",
            desg:"SEO Customer",
            desc:"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },
        {
            name:"Daniel Desuja",
            desg:"SEO Customer",
            desc:"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },
        {
            name:"Daniel Desuja",
            desg:"SEO Customer",
            desc:"Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },
    ];
    const RightScroll=()=>{
        let obj=document.getElementById("feedCardScroll");
        let currentScroll=parseInt(obj.scrollLeft)+300;
        obj.scrollLeft=currentScroll;
    };
    const LefttScroll=()=>{
        let obj=document.getElementById("feedCardScroll");
        let currentScroll=parseInt(obj.scrollLeft)-300;
        obj.scrollLeft=currentScroll;
    };
    return(
        <div className={styles.feedbackContainer}>
            <section className={styles.feedData}>
                <p>OUR BEST REVIEW’S</p>
                <h1>CUSTOMER’S FEEDBACK</h1>
            </section>
            <section className={styles.feedCards} id="feedCardScroll">
                <img onClick={LefttScroll} alt="..."  src={process.env.PUBLIC_URL+"/images/left.png"} className={styles.leftArrow}/>
                {
                    feeds.map((values,index)=>{
                        return <FeedbackCard key={index} data={values} />
                    })
                }
                <img alt="..."  onClick={RightScroll} src={process.env.PUBLIC_URL+"/images/right.png"} className={styles.rightArrow}/>
            </section>
        </div>
    );
};