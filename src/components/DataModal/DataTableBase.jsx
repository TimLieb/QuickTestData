import React from "react";
import DataTable from "./DataTable";

class DataTableBase extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.props.setLoading(true);
	// }

	componentDidMount() {
		this.props.setLoading(false);
	}

	render() {
		return <DataTable />;
	}
}

export default DataTableBase;
