import { styled, darken, lighten } from "@mui/material/styles";
import { useState } from "react";
import {
	GridRowModes,
	DataGrid,
	GridToolbarContainer,
	GridActionsCellItem,
	GridRowEditStopReasons,
} from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	"& .rows-theme": {
		"&:hover": {
			backgroundColor: lighten(theme.palette.divider, 0.5),
		},
		"&.Mui-selected": {
			backgroundColor: "white",
			"&:hover": {
				backgroundColor: lighten(theme.palette.divider, 0.5),
			},
		},
	},
	"& .hide-separator": {
		"& > .MuiDataGrid-columnSeparator": {
			display: "none",
		},

		"&:focus": {
			outline: "none !important",
		},
	},
	"& .headers-theme": {
		width: "100%",
		"& .MuiDataGrid-columnHeaderTitleContainer": {
			alignItems: "center",
			justifyContent: "center",
		},
		"&:focus": {
			outline: "none !important",
		},
	},
}));

function ListTable() {
	const [rowModesModel, setRowModesModel] = useState({});

	let arr = [];
	for (let i = 1; i < 101; i++) {
		arr = arr.concat({ id: i, values: "" });
	}

	const [rows, setRows] = useState(arr);

	const columns = [
		{
			field: "values",
			headerName: "Values",
			width: 249,
			editable: true,
			sortable: false,
			headerClassName: "headers-theme",
		},
	];

	const handleRowClick = (event) => {
		let newModel = {};
		rows.map((row) => {
			row.id === event.id
				? (newModel[row.id] = { mode: "edit" })
				: (newModel[row.id] = { mode: "view" });
		});
		setRowModesModel(newModel);
	};

	const enterHandler = (params, event) => {
		const newModel =
			params.id === rows.length
				? { [params.id]: { mode: "view" } }
				: {
						[params.id]: { mode: "view" },
						[params.id + 1]: {
							mode: "edit",
							fieldToFocus: "values",
						},
				  };
		setRowModesModel(newModel);
	};

	const upArrowHandler = (params, event) => {
		const newModel =
			params.id === 1
				? { [params.id]: { mode: "view" } }
				: {
						[params.id]: { mode: "view" },
						[params.id - 1]: {
							mode: "edit",
							fieldToFocus: "values",
						},
				  };
		setRowModesModel(newModel);
	};

	const handleRowEditStop = (params, event) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true;
		}
	};

	const processRowUpdate = (newRow) => {
		return newRow;
	};

	return (
		<>
			<StyledDataGrid
				getRowId={(row) => row.id}
				disableColumnFilter
				disableColumnMenu
				rows={rows}
				columns={columns}
				editMode="row"
				rowHeight={40}
				columnHeaderHeight={40}
				rowModesModel={rowModesModel}
				onCellKeyDown={(params, event) => {
					if (event.key === "Enter") {
						enterHandler(params, event);
					}
					if (event.key === "ArrowDown") {
						enterHandler(params, event);
					}
					if (event.key === "ArrowUp") {
						upArrowHandler(params, event);
					}
				}}
				onRowEditStop={handleRowEditStop}
				onRowClick={handleRowClick}
				processRowUpdate={processRowUpdate}
				onProcessRowUpdateError={(error) => {
					console.log(error);
				}}
				hideFooter={true}
				getRowClassName={(params) => "rows-theme"}
				sx={{
					"&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
						outline: "none !important",
					},
					overflow: "auto",
					maxHeight: "400px",
				}}
			/>
		</>
	);
}

export default ListTable;
