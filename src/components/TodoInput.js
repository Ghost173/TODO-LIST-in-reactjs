import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i class="fas fa-align-justify"></i>
                            </div>
                        </div>
                    </div>
                </form>
                <h1>hello from todo input</h1>
                <TodoItem />
            </div>
        )
    }
}
