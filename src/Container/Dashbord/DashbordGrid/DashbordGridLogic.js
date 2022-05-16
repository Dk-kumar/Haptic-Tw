import DashbordGrid from "./DashbordGrid"
import { useNavigate } from 'react-router-dom'

const DashbordGridLogic = (props) => {

    const navigate = useNavigate();

    const handleNavigation = (path, type) => {
        console.log(path,type,">>>path")
        return navigate({
            pathname: `/${path}`,
            state: { data: type }
        })  
    }

    const containerFuntions = {
        handleNavigation: handleNavigation
    }

    return <DashbordGrid {...props} {...containerFuntions} />
}

export default DashbordGridLogic