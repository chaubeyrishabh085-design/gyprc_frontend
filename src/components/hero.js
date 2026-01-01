import React from 'react';
import styles from '../styles/hero.module.css';
const cdate=new Date();
let year=cdate.getFullYear();


export const Hero=()=>{
    return(
        <>
            <section className={styles.heroContainer}>
                <div className={styles.heroContent}>
                BEST IT & NON IT<br/>SERVICES & SOLUTIONS {year}
                </div>
                <p className={styles.heroPara}>
                We are providing a world-class learning platform that helps enable students worldwide to upgrade themselves and achieve the best they ever desired for. GYPR believes in developing together and successfully transforming the business needs of the clients and our responsibilities extend beyond business.Adding global values is our core mission and main vision.
                </p>
                 <a href='#about' className={styles.btn}>
                   About us &rarr;
                </a>
            </section>
        </>
    );
};