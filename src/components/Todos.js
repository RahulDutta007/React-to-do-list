import React from 'react'

const Todos = ({todos, deleteTodo}) => {
	const todoList = todos.length? (
		todos.map(todo => {
			return(
				<div className="collection-item grey lighten-3 center" key={todo.id}>
					<span className="blue-text text-darken-2" onClick={() => {deleteTodo(todo.id)}}><b><i>{todo.content}</i></b></span>
				</div>
			)
		}) 
		) : (
		<p className="center">You have no todo's left, yay</p>
	)
	return (
		<div className="todos collection">
				{todoList}
		</div>
	)
}

export default Todos