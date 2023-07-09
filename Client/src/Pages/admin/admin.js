import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Issued from '../../components/admincomp/issued'
import Add from '../../components/admincomp/add'
import './admin.css';
import Requested from '../../components/admincomp/Requested';
import HashLoader from "react-spinners/HashLoader";



function Admin() {

  const[loading,setLoading]=useState(true);
   const [allBooksData, setAllBooksData]=useState([]);
  useEffect(()=>{
   fetch("/api/admin").then(res=>res.json()).then((data)=>{
    console.log(data);
    setAllBooksData(data);
     
   })
     setTimeout(()=>{
        setLoading(false);
      },1300)
  },[])

  return (
    <>
    {loading?

      <div className="loading">
        <HashLoader
        color={'#F37A24'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
      </div>

      :
        <div className="admin">
        <Navbar />
        <div className="issued">
            <h1 className='left-head'>Issued Books</h1>
            <Issued />
        </div>
        <div className="issue">
            <h1 className='left-head'>Books Requested</h1>
            <Requested allBooks={allBooksData} />
        </div>
        <div className="order">
            <h1 className='left-head'>Books to be Ordered</h1>
            <Add />
        </div>
    </div>
   
    }
    </>
  )
}
export default Admin