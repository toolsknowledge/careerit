import { useParams } from "react-router-dom";

const Hp = ()=>{
    const {v1,v2,v3} = useParams();
    return(
        <>
            <h1>{v1}...{v2}...{v3}</h1>
        </>
    )
}
export default Hp;