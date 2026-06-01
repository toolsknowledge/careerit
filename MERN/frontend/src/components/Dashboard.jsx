import {Link, Outlet} from "react-router-dom"
const Dashboard = ()=>{
    return(
        <>
            <Link to="dashboard/laptops"> Laptops </Link>
            <Link to="dashboard/mobiles"> Mobiles </Link>
            <Link to="dashboard/watches"> Watches </Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Dashboard;