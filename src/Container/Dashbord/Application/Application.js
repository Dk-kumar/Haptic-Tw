import { useLocation, useNavigate } from "react-router-dom";
import NavBarLogic from "../../NavBar/NavBarLogic";
import SonarQube from "./SonarQube";
import { SONAR_QUBE, NEXUS_IQ, VERA_CODE, UNIT_TEST, SMOKE_TEST, PERFORMANCE } from '../../../Constant/DashBordConst';
import './Application.scss';

const Application = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data, title } = location.state;

    const renderMap = {
        [SONAR_QUBE]: {
            render: () => renderSonarQube()
        },
        [NEXUS_IQ]: {
            render: () => renderNexusIQ()
        },
        [VERA_CODE]: {
            render: () => renderVeraCode()
        },
        [UNIT_TEST]: {
            render: () => renderUnitTest()
        },
        [SMOKE_TEST]: {
            render: () => renderSmokeTest()
        },
        [PERFORMANCE]: {
            render: () => renderPerformance()
        }
    }

    const renderBackArrow = () => {
        return <div className="backArrow" onClick={() => navigate(-1)}>{("<=")}</div>
    }

    const renderSonarQube = () => {
        return <SonarQube data={data} title={title} />
    }

    const renderNexusIQ = () => {
        return <div>{title}</div>
    }

    const renderVeraCode = () => {
        return <div>{title}</div>
    }

    const renderUnitTest = () => {
        return <div>{title}</div>
    }

    const renderPerformance = () => {
        return <div>{title}</div>
    }

    const renderSmokeTest = () => {
        return <div>{title}</div>
    }

    const renderContents = () => {
        const { render } = renderMap[title];
        return (
            <>
                {render()}
            </>
        )
    }

    return (
        <>
            <div className="ApplicationContainer">
                <NavBarLogic />
                <div className="DetailsContainer">
                    {renderBackArrow()}
                    <h2>{("Application A")}</h2>
                    {renderContents()}
                </div>
            </div>
        </>
    );
}

export default Application