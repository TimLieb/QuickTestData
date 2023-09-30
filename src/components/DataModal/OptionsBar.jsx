import {
	Box,
	Button,
	ButtonGroup,
	CircularProgress,
	TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useColumnsValue } from "../../context/ColumnsContext";
import { useCustomListValue } from "../../context/CustomListContext";
import {
	generateFile,
	generateHeaders,
	generateRows,
} from "../../helpers/DataGeneration";

function OptionsBar() {
	const [rowCount, setRowCount] = useState("100");
	const [type, setType] = useState("csv");
	const columns = useColumnsValue();
	const customLists = useCustomListValue();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		asyncTimer().then(() => {
			if (loading) {
				if (loading) {
					const headers = generateHeaders(columns);
					const rows = generateRows(columns, rowCount, customLists);

					const file = generateFile(headers, rows, type);
					const url = URL.createObjectURL(file);
					const link = document.createElement("a");

					link.href = url;
					link.download = file.name;
					document.body.appendChild(link);
					link.click();

					document.body.removeChild(link);
					window.URL.revokeObjectURL(url);
					setLoading(false);
				}
			}
		});
	}, [loading]);

	const asyncTimer = async () => {
		await new Promise((r) => setTimeout(r, 500));
	};

	const rowsHandler = (event) => {
		setRowCount(event.target.value);
	};

	const rowsError =
		isNaN(parseInt(rowCount)) || parseInt(rowCount) > 30000 ? true : false;

	const typeHandler = (event) => {
		setType(event.target.id);
	};

	const downloadHandler = () => {
		setLoading(true);
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
				value={rowCount}
				onChange={rowsHandler}
				helperText="max 30000"
			/>

			<ButtonGroup
				variant="outlined"
				aria-label="outlined primary button group"
				sx={{ marginLeft: "40px", height: "40px" }}
			>
				<Button
					id="json"
					onClick={typeHandler}
					variant={type === "json" ? "contained" : "outlined"}
				>
					JSON
				</Button>
				<Button
					id="csv"
					onClick={typeHandler}
					variant={type === "csv" ? "contained" : "outlined"}
				>
					CSV
				</Button>
				<Button
					id="text"
					onClick={typeHandler}
					variant={type === "text" ? "contained" : "outlined"}
				>
					TEXT
				</Button>
			</ButtonGroup>
			<Button
				disabled={rowsError}
				variant="contained"
				onClick={downloadHandler}
				sx={{ marginLeft: "40px", width: "210px", height: "40px" }}
			>
				{loading ? (
					<CircularProgress
						sx={{
							color: "white",
						}}
						size="1.5rem"
					/>
				) : (
					"Download"
				)}
			</Button>
		</Box>
	);
}

export default OptionsBar;
