/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const ApiUrl = "http://localhost:8000/blogs/";

const useFetch = (ApiUrl) => {
  const [data, setData] = useState(null);

  const [ispending, setIsPending] = useState(true);

  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont= new AbortController();
    setTimeout(() => {
      fetch(ApiUrl,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("fetching Data from server not found");
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name==='AbortError'){
            console.log('Abort Error');
          }else{
          setError(err.message);
          setIsPending(false);
          }
        });
    }, 1000);
    return ()=>abortCont.abort();
  }, [ApiUrl]);
  return { data, ispending, error };
};

export default useFetch;
