import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";

function OptionsBar() {
	const [rows, setRows] = useState("100");
	const [type, setType] = useState("text");

	const rowsHandler = (event) => {
		setRows(event.target.value);
	};

	const rowsError = isNaN(parseInt(rows)) ? true : false;

	const typeHandler = (event) => {
		setType(event.target.id);
	};

	return (
		<Box
			sx={{
				display: "flex",
				marginBottom: "20px",
				justifyContent: "center",
			}}
		>
			<TextField
				error={rowsError}
				variant="outlined"
				size="small"
				label="Row count"
				value={rows}
				onChange={rowsHandler}
			/>

			<ButtonGroup
				variant="outlined"
				aria-label="outlined primary button group"
				sx={{ marginLeft: "40px" }}
			>
				<Button
					id="json"
					onClick={typeHandler}
					variant={type === "json" ? "contained" : "outlined"}
				>
					JSON
				</Button>
				<Button
					id="text"
					onClick={typeHandler}
					variant={type === "text" ? "contained" : "outlined"}
				>
					Text
				</Button>
				<Button
					id="excel"
					onClick={typeHandler}
					variant={type === "excel" ? "contained" : "outlined"}
				>
					Excel
				</Button>
			</ButtonGroup>
			<Button
				disabled={rowsError}
				variant="contained"
				sx={{ marginLeft: "40px", width: "210px" }}
			>
				Download
			</Button>
		</Box>
	);
}

export default OptionsBar;
