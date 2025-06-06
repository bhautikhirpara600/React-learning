// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})

    // const followers = data["followers"]
    // const imgUrl = data["avatar_url"]
    // const name = data["name"]

    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])


    return (
        <div className="bg-gray-500 pb-6">
            <h1 className="text-3xl text-white font-medium p-4 text-center">Github Followers: {data["followers"]}</h1>
            <img className="mx-auto mt-2" src={data["avatar_url"]} alt="Github-picture" />
            <p className="text-center text-3xl text-white font-medium mt-2">{data["name"]}</p>
        </div>
    )
}

export default Github

export async function githubLoader() {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json()
}

// export { githubLoader }