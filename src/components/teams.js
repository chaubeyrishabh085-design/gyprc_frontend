import React from 'react';
import styles from '../styles/services.module.css';
import { TeamImageCard,Dropdown} from './cards';
export const TeamMembers=()=>{
    const teamMembers=[
        {
            img:process.env.PUBLIC_URL+"/images/3.Ambrish.PNG",
            name:"Mr. Ambrish,",
            design:"Director"
        },
        {
            img:process.env.PUBLIC_URL+"/images/avdhesh.png",
            name:"Mr. Avdhesh",
            design:"Project Manager"
        },
        {
            img:process.env.PUBLIC_URL+"/images/rahul.png",
            name:"Mr. Rahul",
            design:"Manager - Content"
        },
        {
            img:process.env.PUBLIC_URL+"/images/hr.jpeg",
            name:"Hena Khan",
            design:"HR & ADMIN"
        },
        {
            img:process.env.PUBLIC_URL+"/images/navedA.jpg",
            name:"Mr. Naved",
            design:"Accounts"
        }
    ]

    const RightScroll=()=>{
        let obj=document.getElementById("teamScroll");
        let currentScroll=parseInt(obj.scrollLeft)+350;
        obj.scrollLeft=currentScroll;
    };
    const LefttScroll=()=>{
        let obj=document.getElementById("teamScroll");
        let currentScroll=parseInt(obj.scrollLeft)-350;
        obj.scrollLeft=currentScroll;
    };
    
    return(
        <div className={styles.teamContainer} id='teams'>
            <section className={styles.teamTitle}>
                <p>GREAT TEAM MEMBERS</p>
                <h2>WE HAVE EXPERT TEAM</h2>
            </section>
            <section className={styles.teamImg} id="teamScroll">
                <img onClick={LefttScroll} alt="..." src={process.env.PUBLIC_URL+"/images/leftArrow.png"} className={styles.leftArrow}/>
                {
                    teamMembers.map((values,index)=>{
                        return <TeamImageCard key={index} data={values}/>
                    })
                }
                <img alt="..."  onClick={RightScroll} src={process.env.PUBLIC_URL+"/images/rightArrow.png"} className={styles.rightArrow}/>
            </section>
        </div>
    );
};

export const FAQ=(props)=>{
    const faqList=[
        {
            problem:"How does GYPR function ?",
            solution:"The answer is GYPR a community of academics with over a million experts who share their thorough and valuable course materials to make students' academic journeys more interesting and worthwhile. In order to succeed academically, you can get homework assistance, proper exam preparation advice, and thorough study materials from GYPR."
        },
        {
            problem:"Is consulting GYPR for information considered cheating?",
            solution:"No, absolutely not! We won't put undue pressure on you to quickly memorize the answers to your queries or solve your issues. Please only use them as a guide. Recognize, and then independently consider what you've learned. Try to summarize the responses on your own to help yourself understand the concepts more clearly."
        },
        {
            problem:"Contact Support!",
            solution:"Do you have any further questions? Get help from our support team."
        }
    ];
    return(
        <div className={styles.faqContainer}>
            <section className={styles.faqContent}>
                <p>TALK ABOUT SOMETHING</p>
                <h1>HOW CAN WE HELP YOU?</h1>
                {
                    faqList.map((value,index)=>{
                        return <Dropdown key={index} id={"Q"+index} data={value}/>
                    })
                }
            </section>
        </div>
    );
};

export const ClientsList=()=>{
    const clients=[
        process.env.PUBLIC_URL+"/images/teachercool.svg",
        process.env.PUBLIC_URL+"/images/finallogo.png",
    ]
    return(
        <div className={styles.clContaier}>
            <h4>OUR TRUSTED CLIENTS</h4>
            <section className={styles.clientlst}>
                {
                    clients.map((values,index)=>{
                        return <img width="120px" key={index} style={{margin:"40px"}} src={values}  alt='cpmany'/>
                    })
                }
                
            </section>
        </div>
    );
};