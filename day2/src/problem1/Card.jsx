import styles from "./Card.module.css";
// import { Icon } from 'react-native-elements';
// import { FaBeer } from 'react-icons/fa';

const Card=()=>{
 const data=[
     { date:"28/10/2020",
       study:"Case Study",
       heading:"Amazon Gift",
       subheading:"Pay",
       devices:"Desktop - Mobile",
       logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl1i4DTIVcDrzJUKJpl5T8xFOLDXb6JHA7d3Rkr8ZrJz-iiB2ZDEPeRxNzvnn2oCvTns&usqp=CAU",
       icon:"https://cdn-icons-png.flaticon.com/512/109/109617.png",
       color:"orange",
    }
 ]

    return (
        <>
        {
            data.map((elem)=>{
         return ( <div className={styles.container} style={{backgroundColor:elem.color}} >
        <div className={styles.card}>
            {
                data.map((elem)=>{
                    return (
                        <>
                          <h1>{elem.date}</h1>
                          <div className={styles.study}>{elem.study}</div>
                          <h1 className={styles.company}>{elem.heading}</h1>
                          <h1 className={styles.pay}>{elem.subheading}</h1>
                          <h1>{elem.devices}</h1>
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
                        <img src={elem.logo} className={styles.logo}></img>
                       <img src={elem.icon} className={styles.icon}></img>
                       </div>
                        </>
                    )
                })
            }
        </div>
        </div>
         )
        })
}
        </>
    )
}

export default Card