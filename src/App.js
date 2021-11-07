import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import DATA from "./data.json";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function Main(props) {
  var tasklist = "";
  var taskLength = 0;
  const { data, isSuccess } = useQuery("repoData", () => DATA, {
    staleTime: 1000,
  });
  if (isSuccess) {
    taskLength = data.length;
    tasklist = data.map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
      />
    ));
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form />

      <div className="filters btn-group stack-exception">
        <FilterButton filter="all" />
        <FilterButton filter="active" />
        <FilterButton filter="completed" />
      </div>
      <h2 id="list-heading">{taskLength} tasks remaining</h2>
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

const queryClient = new QueryClient();

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};
