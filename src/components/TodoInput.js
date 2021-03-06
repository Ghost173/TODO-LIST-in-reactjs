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
                                <i class="fa fa-align-justify"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="add ToDo items"/>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3"> Add Items</button>
                </form>
                
                <TodoItem />
            </div>
        )
    }
}
