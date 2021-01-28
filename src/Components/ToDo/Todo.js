import React from "react";
import "./Todo.css"
import AddItem from "./AddItem"
import TDList from "./TDList"
import classNames from 'classnames';

class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[],
            item:"",
            active: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.activeHandler = this.activeHandler.bind(this);
        
    }

    componentDidMount() {
        const localKeys = Object.keys(localStorage).filter(key => 
            key.includes("todo-item")
        );
        const restoredLocal = localKeys.map(item => {
            return JSON.parse(localStorage.getItem(item));
        });
        this.setState({ list:restoredLocal })
    }

    handleChange(event) {
        // const target = event.target;
        // const value = target.type === "text" ? target.input : target.value;
        // const name = target.name;
        this.setState({
            item: event.target.value
        });
    };

    handleSubmit(event) {
        let newItem = { item: this.state.item, id:Date.now() };

        //Set to localStorage
        const stringifyNewItem = JSON.stringify(newItem);
        localStorage.setItem(`todo-item-${newItem.id}`, stringifyNewItem);

        //Get localStorage and set to State
        const localKeys = Object.keys(localStorage).filter(key => {
            key.includes("todo-item")
        });
        const restoredLocal = localKeys.map(item => {
            return JSON.parse(localStorage.getItem(item));
        });

        this.setState({
            list: restoredLocal,
            item: ""
        });

        event.preventDefault();
    }

    //Remove items
    deleteItem(id) {
        localStorage.removeItem(`todo-item-${id}`);
        this.setState((prevState, { list }) => ({
            list: prevState.list.filter(item => item.id !== id)
        }));
    }

    activeHandler(){
        this.setState({ active: !this.state.active });
    }

    render() {
        console.log("list: ", this.state.list);
        let activeToDoList = classNames({
            "todo-list-container": true,
            active: this.state.active
        });

        return(
            <div className="todo-container">
                <div className={activeToDoList}>
                    <TDList list={this.state.list} deleteItem={this.deleteItem} />
                    <AddItem
                      item={this.state.item}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="todo-click-label">
                    <span onClick={this.activeHandler}>To Do</span>
                </div>
            </div>
        );
    }
}

export default ToDoList