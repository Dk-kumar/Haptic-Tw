import "./DashbordGrid.scss";

const DashbordGrid = (props) => {
  const { gridContant } = props;

  const renderHeading = () => {
    return (
      <div className="heading">
        <span>{"Automated Pipeline Results (as of 05/22/2022)"}</span>
      </div>
    );
  };

  const renderGrid = () => {
    return (
      <>
        {renderHeading()}
        <div className="grid-wrapper">
          {gridContant.map((item) => {
            return (
              <div className="content-wrapper">
                <p className="title">{item.title}</p>
                <div className="content">
                  <p>{item.contant}</p>
                </div>
                <div className="buttons">
                  <button className={item.success}>{item.success}</button>
                  <button className={item.details}>{item.details}</button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return <div className="grid-container">{renderGrid()}</div>;
};

export default DashbordGrid;
