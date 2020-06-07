import React from 'react'

class AddForm extends React.Component {
	state = {
		content: ''
	}
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		})
	}
	render() {
		return (
			<div className="">
				<form onSubmit={this.handleSubmit}>
					<h5><b>Add new Todo</b></h5>
					<input type="text" onChange={this.handleChange} value={this.state.content}/>
				</form>
			</div>
		)
	}
}

export default AddForm;