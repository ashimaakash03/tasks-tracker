import "./TodoItems.css";
import tick from "../../assets/images/tick.png";
import cross from "../../assets/images/cross.png";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ number, text, setTodos }) => {
  const toggle = (number) => {
    let data = JSON.parse(localStorage.getItem("todos"));

    for (let i = 0; i < data.length; i++) {
      if (data[i].number === number) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
  };
  return (
    <div className="todo-items">
      <div
        className="todo-items-container"
        onClick={() => {
          toggle(number);
        }}
      >
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
