import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div id="todo">
      <div onClick={()=> editTodo(idx)}>{
        selected === idx? text : todo
      }</div>
      <div  onClick={() => deleteTodo(idx)}>X</div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});
const mapStateToprops = state => ({
  text: state.text,
  selected: state.selected
})
export default connect(mapStateToprops,mapDispatchToProps) (Todo);
