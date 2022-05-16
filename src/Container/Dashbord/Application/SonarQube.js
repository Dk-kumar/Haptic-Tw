const SonarQube = (props) => {
    const { data, title } = props;

    const renderDetailsData = (data) => {
        const detailsData = data.map((item) => {
            return <p>{item.value}</p>
        })

        return detailsData;
    }

    return (
        <div className="tableData">
            <div className="DetailsTitle">{title}</div>
            <table className="datasContainer">
                {
                    data.map((item) => {
                        return (
                            <div className="dataContainer">
                                <div className="dataTitle">{item.title}</div>
                                {renderDetailsData(item.data)}
                            </div>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default SonarQube;