import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1)
    useEffect(() => {

    }, [])
    return (
    <div>
        <h1> Count </h1>
    </div>
  )
}

export default User