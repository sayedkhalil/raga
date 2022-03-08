import Head from 'next/head'
import { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc} from "firebase/firestore";

const Main = () => {
  const init ={}    
    const [obj,setobj]=useState(init)
    const ontitle=(e)=>setobj({...obj,title:e.target.value})
    const onans1=(e)=>setobj({...obj,ans1:e.target.value})
    const onans2=(e)=>setobj({...obj,ans2:e.target.value})
    const onans3=(e)=>setobj({...obj,ans3:e.target.value})
    const onans4=(e)=>setobj({...obj,ans4:e.target.value})
    const onans=(e)=>setobj({...obj,ans:e.target.value})
    const onrang=(e)=>setobj({...obj,rang:e.target.value})
    const onsend=async(e)=>{
        e.preventDefault()  
console.log(obj)
const docRef = await addDoc(collection(db, "quize"), obj)    
setobj({title:"",ans:"",ans1:"",ans2:"",ans3:"",ans4:""})
    }
    return (  
        <div className='container p-5'>
        <Head>
          <title>
            إضافة الآسئلة
          </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
        </Head>
        <h1 className='text-success text-center p-5'>إضافة الآسئلة</h1>
        <form onSubmit={onsend}>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">السؤال</label>
    <input type="text" className="form-control" id="exampleFormControlInput1"  required value={obj.title} onChange={ontitle}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">الإختيار الأول</label>
    <input type="text" className="form-control" id="exampleFormControlInput12"  required value={obj.ans1} onChange={onans1}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">الإختيار الثاني</label>
    <input type="text" className="form-control" id="exampleFormControlInput211"  required value={obj.ans2} onChange={onans2}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">الإختيار الثالث</label>
    <input type="text" className="form-control" id="exampleFormControlInput18"  required value={obj.ans3} onChange={onans3}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">الإختيار الرابع</label>
    <input type="text" className="form-control" id="exampleFormControlInput61"  required value={obj.ans4} onChange={onans4}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">الإجابة الصحيحة</label>
    <input type="text" className="form-control" id="exampleFormControlInput891"  required value={obj.ans} onChange={onans}/>
  </div>
 <select name="" id="" onChange={onrang} required>
     <option value="1">سهل</option>
     <option value="2">متوسط</option>
     <option value="3">صعب</option>
     </select>
     <div className="col-auto my-1">
      <button type="submit" className="btn btn-primary" onSubmit={onsend}>إرسال</button>
    </div>
</form>
        </div>
    );
}
 
export default Main; 