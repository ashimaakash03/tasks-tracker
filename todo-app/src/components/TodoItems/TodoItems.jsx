import "./TodoItems.css";
import tick from "../../assets/images/tick.png";
import cross from "../../assets/images/cross.png";
import not_tick from "../../assets/images/not_tick.png";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ number, text }) => {
  return (
    <div className="todo-items">
      <div className="todo-items-container">
        <img src={not_tick} alt="" />
        
        <div className="todo-items-text">
          Task#{number + 1}. {text}
        </div>{" "}
        <div className="task-action">
          <img src={cross} alt="" />
          <img src={tick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
