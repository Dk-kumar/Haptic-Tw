import Dashbord from "./Dashbord"

const DashbordLogic = () => {

    const gridContant = [
        {
            id: 1, title: "SonarQube", contant: "Passed 92.6% Coverage", success: "Success", details: "Details >", data: [
                {
                    title: "New Code",
                    data: [
                        {
                            id: 1,
                            value: "1 new bugs"
                        },
                        {
                            id: 2,
                            value: "0 New Vulnerabilities"
                        },
                        {
                            id: 3,
                            value: "1 New Security Hotspot"
                        },
                        {
                            id: 4,
                            value: "10 New Code Smells"
                        }
                    ]
                },
                {
                    title: "Overall Code",
                    data: [
                        {
                            id: 1,
                            value: "2 bugs"
                        },
                        {
                            id: 2,
                            value: "1 Vulnerabilities"
                        },
                        {
                            id: 3,
                            value: "2 Security Hotspot"
                        },
                        {
                            id: 4,
                            value: "32 Code Smells"
                        }
                    ]
                },

            ]
        },
        { id: 2, title: "NexusIQ", contant: "High Security Threat(s) Found", success: "Failure", details: "Details >" },
        { id: 3, title: "Veracode", contant: "Static Scan: Complete", success: "Success", details: "Details >" },
        { id: 4, title: "Unit Test", contant: "All tests passed", success: "Success", details: "Details >" },
        { id: 2, title: "Smoke Test", contant: "All tests passed", success: "Success", details: "Details >" },
        { id: 2, title: "Parformance", contant: "Exceeds 1 sigma in readings", success: "Failure", details: "Details >" }
    ]

    const containerStates = {
        gridContant: gridContant
    }

    return <Dashbord {...containerStates} />
}

export default DashbordLogic; 