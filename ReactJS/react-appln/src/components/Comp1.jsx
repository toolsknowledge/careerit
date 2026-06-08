import context from "../context/context"
import Comp2 from "./Comp2"
const Comp1 = ()=>{
    return(
        <>
            <context.Provider value="Hello">
                <Comp2></Comp2>
            </context.Provider>
        </>
    )
}
export default Comp1;