import React from "react";
import styles from '../styles/footer.module.css';
import { FooterCard } from "./cards";

const cdate=new Date();
let year=cdate.getFullYear();

export const Footer=()=>{
    const social=[
        process.env.PUBLIC_URL+"/images/fb.png",
        process.env.PUBLIC_URL+"/images/insta.png",
        process.env.PUBLIC_URL+"/images/linkdin.png",
        process.env.PUBLIC_URL+"/images/twitter.png",
    ];
    const footerCards=[
        {
            img:process.env.PUBLIC_URL+"/images/location.png",
            title:"OFFICE ADDRESS",
            desc:"B-104, Second Floor, Phase-I Panchsheel Park Malviya Nagar , Near Triveni Complex New Delhi - 110017"
        },
        {
            img:process.env.PUBLIC_URL+"/images/watch.png",
            title:"Support",
            desc:"24 X 7"
        },
        {
            img:process.env.PUBLIC_URL+"/images/call.png",
            title:"Phone",
            desc:"(+91) 95829 40966"
        },
    ];
    const links=[
        ["About Us","#about"],
        ["Team Dashboard","/login"],
        ["Our Projects","#"],
        ["Contact Us","#"]
    ];
    const explore=[
        "What we Offer",
        "Our Story",
        "Latest Posts",
        "Help Center"
    ];
    return(
        <>
            <div className={styles.footerContainer} id="footer">
                <section className={styles.fpart1}>
                    {
                        footerCards.map((values,index)=>{
                            return <FooterCard data={values} key={index}/>
                        })
                    }
                </section>
                <section className={styles.fpart2}>
                    <div className={styles.fabout}>
                        <h4>About Us</h4>
                        <p>GYPR believes in developing together and successfully transforming the business needs of the clients.</p>
                        <div className={styles.fsocial}>
                            {
                                social.map((value,index)=>{
                                    return <a href="/" key={index}><img src={value} alt="..."/></a>
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.flinks}>
                        <h4>Links</h4>
                        {
                            links.map((value,index)=>{
                                return <a href={value[1]} key={index}>{value[0]}</a>
                            })
                        }
                    </div>
                    <div className={styles.fexplore}>
                        <h4>Explore</h4>
                        {
                            explore.map((value,index)=>{
                                return <a href="/" key={index}>{value}</a>
                            })
                        }
                    </div>
                    <div className={styles.fmap}>
                        <h4>Office Map</h4>
                        <a href="https://goo.gl/maps/5DDTUNdKL5HMcmvS8">
                            <img  src={process.env.PUBLIC_URL+"/images/clocation.PNG"} alt="location"/>
                        </a>
                    </div>
                </section>
            </div>
            <section className={styles.fcopyr}>
            Copyright &copy; {year} Get Your Project Ready Pvt. Ltd . All rights reserved.
            </section>
        </>
    );
}