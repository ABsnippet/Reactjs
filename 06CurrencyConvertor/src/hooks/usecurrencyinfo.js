import { useEffect, useState } from "react";


function usecurrnecyinfo(currency) {
    const [data,setdata] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=USD&to=INR
`)
        .then((res)=> res.json())
        .then((res)=> setdata(res[currency]))
        console.log(data);
        
    }, [currency ])
    console.log(data);
    return data
}

export default usecurrnecyinfo;