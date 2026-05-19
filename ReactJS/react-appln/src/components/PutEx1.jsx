import axios from "axios";
import { useRef } from "react";
const PutEx1 = ()=>{
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const put_ex = async ()=>{
        const {data} = await axios.put("https://dummyjson.com/users/1",{
            "empId":ref1.current.value,
            "empName":ref2.current.value,
            "salary":ref3.current.value
        })
        console.log(data);
    }
    return(
        <>
            <fieldset>
                <legend>PUTEx</legend>
                <input type="number" ref={ref1} placeholder="enter empId"></input>
                <br></br><br></br>
                <input type="text" ref={ref2} placeholder="enter empName"></input>
                <br></br><br></br>
                <input type="number" ref={ref3} placeholder="enter salary"></input>
                <br></br><br></br>
                <button onClick={put_ex}>PutEx</button>
            </fieldset>
        </>
    )
}
export default PutEx1;