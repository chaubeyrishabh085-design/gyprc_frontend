
import React,{useState} from 'react';
import styles from '../styles/headers.module.css';

const ContactHeadCard=(props)=>{
    return(
        <div className={styles.headCard}>
            <i className={props.icon} style={{color:"#0E5AF2",fontSize:"25px"}}></i>
            <span>
                <span style={{color:"#BBBEC4",fontSize:"16px"}}>{props.tag}</span><br/>
                <b >{props.data}</b>
            </span>
        </div>
    );
};

export const SocialHeader=(props)=>{
    return(
        <div className={styles.socialContainer}>
            <span>Follow Us On:</span>
            <a href="https://www.facebook.com/getyourprojectready"><i className="bi bi-facebook"></i></a>
            <a href="/"><i className="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/gypr/"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/gypr-pvt-ltd"><i className="bi bi-linkedin"></i></a>
            <a href="https://teachercool.com/"><i className="bi bi-book"></i></a>
        </div>
    );
};

export const ContactHeader=(props)=>{
    return(
        <div className={styles.contact_container}>
            <div className={styles.logo_header}>
                <a href='https://gypr.in/'><img  alt="GYPR" src={process.env.PUBLIC_URL+"/images/logo.png"} /></a>
                <span>Gypr <span style={{color:"black"}}>Pvt.</span>Ltd</span>
            </div>
            <div className={styles.contact_head}>
                <ContactHeadCard icon="bi bi-telephone-fill"  data="(+91) 95829 40966" tag="Call Anytime"/>
                <div className={styles.mhide}>
                    <ContactHeadCard  icon="bi bi-envelope-fill" data="info@gypr.in" tag="Mail Us For Support"/>
                    <ContactHeadCard  icon="bi bi-geo-alt-fill" data="Panchsheel, New Delhi" tag="Office Address"/>
                </div>
                
            </div>
        </div>
    );
};

export const Navigation=(props)=>{
    const tabs=[
        ["Home","https://gypr.in/"],
        ["About Us","#about"],
        ["Service","#service"],
        ["Education","#service"],
        ["Teams","#teams"],
        ["Contact","#footer"],
    ];
    const [mMenu,setMobileMenu]=useState(true);
    const handleHumberger=(event)=>{
        let mobileMenu=document.getElementById("navigation");
        if (mMenu){
            mobileMenu.style.display="block";
        }
        else{
            mobileMenu.style.display="none";
        }
        setMobileMenu(!mMenu);
        
    };
    return(
        <nav className={styles.navigation} >
            <ul className={styles.navigations_list} id="navigation">
               <div className={styles.mtop}>
                    <div className={styles.crossBtn}>
                        <i className="bi bi-x-lg" onClick={handleHumberger}></i>
                    </div>
                    <div className={styles.logo_header} id={styles.mboileLogo} >
                        <a href='https://gypr.in/'><img  alt="GYPR" src={process.env.PUBLIC_URL+"/images/logo.png"} width="65px"/></a>
                        <span>Gypr <span style={{color:"black"}}>Pvt.</span>Ltd</span>
                    </div>  
               </div>
                {
                    tabs.map((value,index)=>{
                        return <li key={index}><a href={value[1]}>{value[0]}</a></li>
                    },this)
                }
            </ul>
            <span className={styles.humberger} onClick={handleHumberger}>
                <i className="bi bi-list"></i>
            </span>
        </nav>
    );
};
