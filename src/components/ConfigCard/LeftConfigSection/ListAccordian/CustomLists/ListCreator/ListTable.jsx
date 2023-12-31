import { styled, lighten } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
import { TextField, Button, Typography, Box } from "@mui/material";
import {
	useCustomListDispatch,
	useCustomListValue,
} from "../../../../../../context/CustomListContext";
import { useColumnsDispatch } from "../../../../../../context/ColumnsContext";

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

function ListTable({ listId, setListId }) {
	const [rowModesModel, setRowModesModel] = useState({});
	const columnsDispatch = useColumnsDispatch();
	const listDispatch = useCustomListDispatch();
	const lists = useCustomListValue();
	const list = lists.find((list) => list.id === listId);
	let initialRows = [];
	let initialName = "";
	if (list == null) {
		for (let i = 1; i < 101; i++) {
			initialRows = initialRows.concat({ id: i, values: "" });
		}
		initialName = "";
	} else {
		initialRows = list.values;
		initialName = list.name;
	}

	const [rows, setRows] = useState(initialRows);
	const [name, setName] = useState(initialName);

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
		const newRows = rows.map((row) =>
			row.id === newRow.id ? newRow : row
		);
		setRows(newRows);
		return newRow;
	};

	const nameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const submitHandler = () => {
		listDispatch({
			type: "UPSERT",
			payload: { id: listId, name: name, values: rows },
		});
		const payload = {
			type: "custom",
			id: listId,
		};
		columnsDispatch({ type: "SET_LCONFIG", payload: payload });
		setListId("");
	};

	return (
		<Box sx={{ width: "100%" }}>
			<TextField
				id="list-name"
				label="Name"
				autoComplete="off"
				variant="outlined"
				size="small"
				value={name}
				onChange={nameChangeHandler}
				sx={{ width: "100%", paddingBottom: "15px" }}
			/>
			<Typography
				align="center"
				variant="subtitle2"
				sx={{ paddingBottom: "5px" }}
			>
				Note: Blank rows will be excluded
			</Typography>
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
					maxHeight: "500px",
				}}
			/>
			<Button
				variant="contained"
				sx={{ width: "100%", marginTop: "15px" }}
				onClick={submitHandler}
			>
				Submit
			</Button>
		</Box>
	);
}

export default ListTable;
