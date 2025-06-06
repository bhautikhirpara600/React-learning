import { useParams } from "react-router"

function User() {
    const {id} = useParams()
    return (
        <h1 className="text-3xl text-center bg-orange-300">User: {id}</h1>
    )
}

export default User