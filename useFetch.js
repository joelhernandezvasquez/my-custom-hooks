
import {useState,useEffect,useRef} from "react";

const useFetch = (url) => {
  const [state,setState] = useState({
    loading:true,
    data:null,
    error:null
  })

 const isMounted = useRef(true);

   useEffect(() => {
  
     return () => {
       isMounted.current = false;
     }
   }, [])
   
  useEffect(()=>{
    
    setState({  loading:true,
      data:null,
      error:null})
      
    const fetchQoute = async ()=>{
       try{
          const request = await fetch(url);
          const response = await request.json();

        
             if(isMounted){
            setState({
              loading:false,
              data:response,
              error:null
            })
          }
         
          
       }
       catch(err){
        setState({
          loading:false,
          data:null,
          error:err
        })
       }
    }

    fetchQoute();
  },[url])

  return state;
}

export default useFetch;