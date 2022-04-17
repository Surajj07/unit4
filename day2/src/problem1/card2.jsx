import styles from "./Card.module.css";


const Card2=()=>{
 const data=[
     { date:"28/10/2020",
       study:"Case Study",
       heading:"Amazon Gift",
       subheading:"Pay",
       devices:"Desktop - Mobile",
       logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/640px-Amazon_icon.svg.png",
       icon:"https://cdn-icons-png.flaticon.com/512/109/109617.png",
       color:"orange",
    },

     { date:"17 Sep 2020",
       study:"Case Study",
       heading:"Apple Gift",
       subheading:"Payment",
       devices:"Desktop - Mobile",
       logo:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
       icon:"https://cdn-icons-png.flaticon.com/512/109/109617.png",
       color:"grey",
       
    }

 ]

    return (
        <>
        {
            data.map((elem)=>{
         return ( <div className={styles.container} style={{backgroundColor:elem.color}} >
        <div className={styles.card}>
            {/* {
                data.map((elem)=>{
                    return (
                        <> */}
                          <h1>{elem.date}</h1>
                          <div className={styles.study}>{elem.study}</div>
                          <h1 className={styles.company}>{elem.heading}</h1>
                          <h1 className={styles.pay}>{elem.subheading}</h1>
                          <h1>{elem.devices}</h1>
                        {/* </>
                    )
                })
            } */}
          
        </div>
        <div>
            {/* {
                data.map((elem)=>{
                    return (
                        <> */}
                        <div className={styles.card2}>
                        <img src={elem.logo} className={styles.logo} ></img>
                       <img src={elem.icon} className={styles.icon}></img>
                       </div>
                        {/* </>
                    )
                })
            } */}
        </div>
        </div>
         )
        })
}
        </>
    )
}

export default Card2