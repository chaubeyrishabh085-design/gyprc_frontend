import React ,{useState} from 'react';
import styles from '../styles/cards.module.css';

var currentS=false;
export const ServiceCard=(props)=>{
    return(
        <div className={styles.serviceCard}>
            <img src={props.data.img} width="68px" alt='service'/>
            <h4>{props.data.title}</h4>
            <p>{props.data.desc}</p>
            <a href={props.data.link}>Read More</a>
        </div>
    );
};

export const ServiceCard2=(props)=>{
    return(
        <div className={styles.serviceCard} >
            <img src={props.data.img} width="68px" alt='service'/>
            <h4>{props.data.title}</h4>
            <p>{props.data.desc}</p>
            <a href='/'>Read More</a>
        </div>
    );
};

export const TeamImageCard=(props)=>{
    return(
        <div className={styles.teamCard}>
            <img src={props.data.img} alt="profile"/>
            <h5>{props.data.name} </h5>
            <p>{props.data.design} </p>
        </div>
    );
};

export const Dropdown=(props)=>{
    const [isOpen,setIsOpen]=useState(false);
    const handlDrop=(event)=>{
        if (currentS){
            currentS.style.display="none";
        }
        let obj=document.getElementById(props.id);
        if(isOpen){
            obj.style.display="none";
        }
        else{
            obj.style.display="block";
        }
        setIsOpen(!isOpen);
        currentS=obj;
        
    };
    return(
        <div className={styles.dropdownContainer}  >
            <h5>
                <span>{props.data.problem}</span>
                <b onClick={handlDrop} >&rarr;</b>
            </h5>
            <p id={props.id}>{props.data.solution}</p>
        </div>
    );
};

export const FeedbackCard=(props)=>{
    return(
        <div className={styles.feedContainer}>
            <img src={process.env.PUBLIC_URL+"images/quotes.png"} width="70px" alt='...'/>
            <p>{props.data.desc}</p>
            <b>{props.data.name}</b>
            <div>{props.data.desg}</div>
        </div>
    );
};

export const FooterCard=(props)=>{
    return(
        <div className={styles.fContaier}>
            <img src={props.data.img} width="70px" alt='...'/>
            <section className={styles.fData}>
                <h5>{props.data.title}</h5>
                <p>{props.data.desc}</p>
            </section>
        </div>
    );
};