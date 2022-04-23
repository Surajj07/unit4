import React from 'react';
import {useState,useEffect} from 'react';
import styles from './Details.module.css';

const RestaurantDeatils = () => {
  const [datas,setDatas]=useState([])  

  const getData=async()=>{
    try{
           let res=await fetch( "http://localhost:3000/details")
           let data=await res.json();
           setDatas(data)
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const starRating=()=>{
    datas.sort((a,b)=>{
      return b.rating-a.rating
    })
   let result=datas.filter(elem=>elem.rating>4)
    setDatas([...result])
   
  }
  const starRating2=()=>{
    datas.sort((a,b)=>{
      return b.rating-a.rating
    })
   let result=datas.filter(elem=>elem.rating>2)
    setDatas([...result])
   
  }
  const starRating3=()=>{
    datas.sort((a,b)=>{
      return b.rating-a.rating
    })
   let result=datas.filter(elem=>elem.rating>3)
    setDatas([...result])
   
  }
  const starRating1=()=>{
    datas.sort((a,b)=>{
      return b.rating-a.rating
    })
   let result=datas.filter(elem=>elem.rating>1)
    setDatas([...result])
   
  }
  
  return(
    <>
    <button className={styles.sort} onClick={starRating1}>star1</button>
    <button className={styles.sort} onClick={starRating2}>star2</button>
    <button className={styles.sort} onClick={starRating3}>star3</button>
    <button className={styles.sort} onClick={starRating}>star4</button>
  {datas.map((elem)=>{
  return (
   
    <div className={styles.container} key={elem.id}>
      <div>
        <img src={elem.image} className={styles.pic}></img>
      </div>
      <div className={styles.container2}>
        <h3>{elem.categories}</h3>
        <h4>{elem.cost}</h4>
        <p>Card Payment</p>
        <p>{elem.cardPayment}</p>
      </div>
      <div>
        <h2>{elem.rating}</h2>
        <h3>{elem.reviews}</h3>
      </div>
    </div>
  )
})
}
</>)
};


export default RestaurantDeatils
