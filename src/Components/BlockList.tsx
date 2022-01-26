import { useSelector } from "react-redux"
import { useAppSelector } from "../Store/AppState"

export const BlockList = () => {
    
    const msgBlock = useAppSelector((state) => state.msgBlock)

    return (
        <div>
            hello {msgBlock ? msgBlock : "Starting"}
        </div>
    )
}