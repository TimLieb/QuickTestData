import React from "react";
import ErrorBox from "./ErrorBox";

class ErrorBoxBase extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.props.setLoading(true);
	// }

	componentDidMount() {
		this.props.setLoading(false);
	}

	render() {
		return <ErrorBox errArr={this.props.errArr} />;
	}
}

export default ErrorBoxBase;
