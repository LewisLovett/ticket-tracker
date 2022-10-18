import "./Counter.scss";

const Counter = (props) => {
    return (
        <>
            <h3>Counter</h3>
            <div className="buttonContainer">
            <button>-</button>
            <div>0</div>
            <button>+</button>
            </div>
        </>
    );
};

export default Counter;