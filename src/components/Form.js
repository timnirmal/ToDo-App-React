import React from "react";
import { useState } from "react";
import App from "../App";

// function handleSubmit(e) {
//     e.preventDefault();
//     App("say hello");
//     //console.log(e.target);
// }

function Form (props) {
    const [form, setForm] = useState({
        todo_item: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        App("say hello");
        console.log(form.todo_item);
    }

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

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