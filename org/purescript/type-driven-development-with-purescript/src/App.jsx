import React, {useContext} from 'react';
import {reloadPage} from './output/Behavior.Load'
import {addTodo} from './output/Behavior.Add'
import withState from './withState'
function App() {
    const {state, dispatch} = useContext(context)
    return (
        <div className="todoapp">
            <div className="header">
                <h1>todos</h1>
                <input name="new-todo"
                       type="text"
                       className="new-todo"
                       onKeyDown={e=>{
                           if(e.keyCode === 13){
                               dispatch(addTodo({
                                   "userId": 1,
                                   "id": 0,
                                   "title": e.target.value,
                                   "completed": false
                               }))
                    e.target.value =""
                           }
                       }}
                />
            </div>
            <div className="main">
                <ul className="todo-list">
                    {state.todos.map(todo =>
                        <li className="view">
                            <input class="toggle"
                                   type="checkbox"
                                   defaultChecked={todo.completed}/>
                            <label>{todo.title}</label>
                        </li>
                    )
                    }
                </ul>
            </div>
            <div className="footer">
                <div><span className="todo-count">1 item left</span>
                </div>
                <ul className="filters">
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li>
                        <a href="#">Active</a>
                    </li>
                    <li>
                        <a href="#">Completed</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
const initState = {todos: []}
export const { context, Component } = withState(
    App,
    initState,
    (props) => reloadPage
)
export default Component;
