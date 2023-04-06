import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    return (
        <>
            <NavLink to="/" activeClassName="active">
                List
            </NavLink>
            <NavLink to="/create" activeClassName="active" className="ms-3">
                Create
            </NavLink>
            <Switch>
                <Route exact path="/">
                    <TodoList />
                </Route>
                <Route path="/create">
                    <TodoForm />
                </Route>
            </Switch>
        </>
    );
}

export default App;
