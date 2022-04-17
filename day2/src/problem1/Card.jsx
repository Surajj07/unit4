import styles from "./Card.module.css";
// import { Icon } from 'react-native-elements';
// import { FaBeer } from 'react-icons/fa';

const Card=()=>{
 const data=[
     { date:"28/10/2020",
       study:"Case Study",
       company:"Amazon Gift",
       pay:"Pay",
       gadgets:"Desktop - Mobile",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl1i4DTIVcDrzJUKJpl5T8xFOLDXb6JHA7d3Rkr8ZrJz-iiB2ZDEPeRxNzvnn2oCvTns&usqp=CAU",
       icon:"https://cdn-icons-png.flaticon.com/512/109/109617.png",
       back:"orange",
    }
 ]

    return (
        <>
        <div className={styles.container} >
        <div className={styles.card}>
            {
                data.map((elem)=>{
                    return (
                        <>
                          <h1>{elem.date}</h1>
                          <div className={styles.study}>{elem.study}</div>
                          <h1 className={styles.company}>{elem.company}</h1>
                          <h1 className={styles.pay}>{elem.pay}</h1>
                          <h1>{elem.gadgets}</h1>
                        </>
                    )
                })
            }
          
        </div>
        <div>
            {
                data.map((elem)=>{
                    return (
                        <>
                        <div className={styles.card2}>
                        <img src={elem.image} className={styles.logo}></img>
                       <img src={elem.icon} className={styles.icon}></img>
                       </div>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default Card