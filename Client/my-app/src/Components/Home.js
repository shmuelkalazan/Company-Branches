import { useEffect } from "react"
import BranchesList from "./BranchesList"
import Filter from "./Filter"
import { useDispatch } from "react-redux"
import { actions } from "../Redux/actions";

export default function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/stores')
                const data = await response.json();
                dispatch(actions.branchesList(data))
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, [dispatch])

    return (
        <div className="container">
            <div className="fs-1 mt-3 mb-3 d-inline-flex">Company Branches</div>
            <div className="row"><Filter></Filter></div>
            <div className="row"><BranchesList></BranchesList></div>
        </div>
    )
}
