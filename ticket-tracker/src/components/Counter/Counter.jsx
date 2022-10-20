import "./Counter.scss";

const Counter = (props) => {
    const {count, handleIncrement, handleDecrement} = props
    return (
        <>
            <h3>Counter</h3>
            <div className="buttonContainer">
            <button onClick={handleDecrement}>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
            </div>
        </>
    );
};

export default Counter;