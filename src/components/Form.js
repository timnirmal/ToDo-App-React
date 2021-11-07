import React from "react";

function Form(props) {
    const [form, setForm] = useState({
        todo_item: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        DATA.push({ id: "todo-" + DATA.length, name: form.todo_item, completed: false });
        setForm({ todo_item: "" });
    };

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="todo_item"
                    autoComplete="off"
                    onChange={updateForm}
                    value={form.todo_item}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;