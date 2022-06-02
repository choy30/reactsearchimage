import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

class Search extends Component {
	state = {
		searchText: "",
		amount: 15,
		apiUrl: "https://pixabay.com/api",
		apiKey: "27723975-2450949546c16e213083ab408",
		images: [],
	};
	render() {
		return (
			<div>
				<TextField
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
			</div>
		);
	}
}

export default Search;
