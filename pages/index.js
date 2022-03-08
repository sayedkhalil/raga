import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import CountDownTimer from '../firebase';
import { initScriptLoader } from 'next/script'
import { db } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , getDoc, query, where} from "firebase/firestore";

export default function Home({getdata}) {
  let easy =JSON.parse(getdata.easy)
  let def =JSON.parse(getdata.def)
  let medl =JSON.parse(getdata.medl)

  let iner; 
  var s =0
  const o =[]
  const minit=0
  const sec=0
  let indexx =0;
  var r =0
  const random=[]
  var item
  const [ans,setans]=useState("")
  const[answerr,setanswerr]=useState("")
  const [index,setindex]=useState(1)
  useEffect(()=>{
    const init=()=>{
      const curent = Math.floor(Math.random() * dataq.length);
      if(! random.includes(curent)){
       if(s==0){
        random.push(curent)
        item = dataq[curent]
        start.push(
          <div id="content">
          <span>
          <input type="radio" id="radio" name="answer" value={item.ans1} onChange={onvalue}/>
          <label htmlFor="ans1">{item.ans1}</label>
          </span>
          <span>
          <input type="radio" id="radio" name="answer" value={item.ans2} onChange={onvalue}/>
          <label htmlFor="ans2">{item.ans2}</label>
          </span>
          <span>
          <input type="radio" id="radio" name="answer" value={item.ans3} onChange={onvalue}/>
          <label htmlFor="ans3">{item.ans3}</label>
          </span>
          <span>
          <input type="radio" id="radio" name="answer" value={item.ans4} onChange={onvalue}/>
          <label htmlFor="ans4">{item.ans4}</label>
          </span> 
          </div> )
         setans(dataq[curent].ans)
         console.log(item)  

       }
      }else{     
        init()}}
        init() 
  },[])
  const onvalue = (e) => setanswerr( e.target.value);console.log(answerr)
  let dataq =[{"title":" من العشرة المبشرين بالجنة","ans1":"خالد بن الوليد","ans2":"عمرو بن العاص","ans3":"أنس بن مالك","ans4":"أبو بكر الصديق","ans":"أبو بكر الصديق"},
  {"title":"أصغر رقم زوجي","ans1":"1","ans2":"2","ans3":"3","ans4":"4","ans":"2"},
  {"title":"في الجهاز الهضمي","ans1":"الرئة","ans2":"القرنية","ans3":"القلب","ans4":"المعدة","ans":"المعدة"},
  {"title":"تقع في غرب المملكة","ans1":"جدة","ans2":"الرياض","ans3":"القصيم","ans4":"الدمام","ans":"جدة"},
  {"title":"فعل أمر","ans1":"يأكل","ans2":"نأكل","ans3":"أكل","ans4":"كل","ans":"كل"},
  {"title":"أكبر رقم فردي مكون من رقمين","ans1":"98","ans2":"100","ans3":"99","ans4":"101","ans":"99"}]
  const start=[      <button className='buton' onClick={()=>{setxml(start[1]); settimeer([1,30]);s=s+1;settitle(item.title);indexx=indexx+1}} key="1">إبدأ</button>] 

  const [xml,setxml]=useState(start[0])
  const [title,settitle]=useState("مسابقة من سيربح البالون")
  const [[ mins, secs],settimeer]=useState([ minit, sec]);
  const tick = () => {
    var audio = new Audio('../hh.mp3');
    
    if ( mins === 0 && secs === 0) 
        reset()
    else if ( secs === 0) {
        settimeer([mins - 1, 59]);
        audio.play()
    } else {
        settimeer([mins, secs - 1]);
        audio.play()
    }
};
const two=()=>{
  const curent = Math.floor(Math.random() * dataq.length);
  if(! random.includes(curent)){
  
    random.push(curent)
    item = dataq[curent]
    setxml(
      <div id="content">
      <span>
      <input type="radio" id="radio" name="answer" value={item.ans1} onChange={onvalue}/>
      <label htmlFor="ans1">{item.ans1}</label>
      </span>
      <span>
      <input type="radio" id="radio" name="answer" value={item.ans2} onChange={onvalue}/>
      <label htmlFor="ans2">{item.ans2}</label>
      </span>
      <span>
      <input type="radio" id="radio" name="answer" value={item.ans3} onChange={onvalue}/>
      <label htmlFor="ans3">{item.ans3}</label>
      </span>
      <span>
      <input type="radio" id="radio" name="answer" value={item.ans4} onChange={onvalue}/>
      <label htmlFor="ans4">{item.ans4}</label>
      </span> 
      </div> )
     setans(dataq[curent].ans)
     settitle(dataq[curent].title)
     console.log(item)  

  
  }else{     
    two()}}
const reset = () => settimeer([ parseInt(minit), parseInt(sec)]);
useEffect(() => {
  let min = document.getElementById("mi");
  const timerId = setInterval(() => tick(), 1000);
  min.innerText =`${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  return () => clearInterval(timerId);
},[mins,secs]);
// useEffect(()=>{
//   function level() {
//     let le = Array.from(document.querySelectorAll("#level span"));
//     le[indexx].classList.add("act");
//   }

//   level()
// },[])

const onresb =()=>{ 
  if(answerr==ans){
    var audi = new Audio('../ss.mp3');
    audi.play();
    setindex(index+1)
  if(index<18){
    let le = Array.from(document.querySelectorAll("#level span"));
    le[index].classList.add("act");
   two()
  settimeer([1,30])
  }else{
    settimeer([0,0])
    settitle("انتهت المسابقة")
    setxml(  <div id="content">
  <h1 className='but'>مبرووووووك ربحت البالون</h1>
    </div> )
  }
 
}else{
  settimeer([0,0])
  var aud = new Audio('../ll.mp3');
  aud.play();
  settitle("انتهت المسابقة")
  setxml(  <div id="content">
<h1 className='but'>حظ موفق المرة القادمة</h1>
  </div> )
console.log("no")
console.log()
}
}
  return (
    <div className={styles.container}>
      <Head>
        <title>من سيربح البالون</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <img className="sch" src="download.png" alt=""/>
    <img className="logo" src="logof.jpg" width="300px" height="300px" alt=""/>
    <div className="container">
      <div className="header">
        <h2 id="q">
          {title}
          </h2>
      </div>
       {xml}
      <button id="btn" onClick={onresb}>التالي</button>
      <div id="level">
        <span className="t act"></span><span className="t"></span><span className="t"></span>
        <span className="t"></span><span className="t"></span><span className="t"></span>
        <span className="t"></span><span className="t"></span><span className="t"></span>
        <span className="t"></span><span className="t"></span><span className="t"></span>
        <span className="t"></span><span className="t"></span><span className="t"></span>
        <span className="t"></span><span className="t"></span><span className="t"></span>
      </div>
      <div id='mi'>
        
        </div>
    </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sayedkhalil.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' sayed khalil'}
      
        </a>
      </footer>
    </div>
  )
}
export async function getServerSideProps(){
  const es=[]
  const md=[]
  const df=[]
  const prodlist = collection(db, 'quize');
  const a = query(prodlist, where("category", "==",1));
  const b = query(prodlist, where("category", "==",2));
  const c = query(prodlist, where("category", "==",3));
  const easy= await getDocs(a);
   easy?easy.forEach(doc =>{ es.push(doc.data())  }):es
   const def= await getDocs(c);
   def?def.forEach(doc =>{df.push(doc.data())  }):df
   const medl= await getDocs(b);
   medl?medl.forEach(doc =>{md.push(doc.data())  }):md
         
     return{
      props:{getdata:{easy:JSON.stringify(easy),def:JSON.stringify(def),medl:JSON.stringify(medl)}}
           }
}