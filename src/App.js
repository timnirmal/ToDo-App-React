import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
    // Mapping Task List to Todo component
    var tasklist = ""
    if (props.task) {
        tasklist = props.task.map(task => (<Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />));
    }

    function addTask(props) {
        alert(props.name);
    }

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>

            <Form addTask={addTask}/>

            <div className="filters btn-group stack-exception">
                <FilterButton filter="all" />
                <FilterButton filter="active" />
                <FilterButton filter="completed" />
            </div>
            <h2 id="list-heading">
                {props.task.length} tasks remaining
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {tasklist}
            </ul>
        </div>
    );
}

export default App;