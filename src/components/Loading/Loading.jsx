import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingOuter">
        <div className="loadingInner">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
