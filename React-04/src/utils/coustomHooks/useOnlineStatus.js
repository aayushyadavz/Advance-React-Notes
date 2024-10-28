import {useState} from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)

    addEventListener("offline", (event) => {
        setOnlineStatus(false)
    });
    addEventListener("online", (event) => {
        setOnlineStatus(true)
    });

    return onlineStatus
}

export default useOnlineStatus 