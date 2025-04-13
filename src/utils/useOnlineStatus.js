import { useEffect,useState } from "react";

const useOnlineStatus=()=>{
    //check online status
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
    },[])
    const handleOnline=()=>{
        setIsOnline(true);
    }
    const handleOffline=()=>{
        setIsOnline(false);
    }
    return isOnline; //boolean
}
export default useOnlineStatus;