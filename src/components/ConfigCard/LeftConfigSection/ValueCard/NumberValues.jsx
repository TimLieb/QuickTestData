import { Divider, List, ListItem, MenuItem, TextField } from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../../context/ColumnsContext";
import LengthInput from "./LengthInput";

function NumberValues() {
	const column = useCurrentColumn();
	const columnsDispatch = useColumnsDispatch();

	const decimalPlaces = [0, 1, 2, 3, 4];

	const decimalChangeHandler = (event) => {
		const payload = {
			...column.valueConfig,
			decimalPlaces: event.target.value,
		};
		columnsDispatch({ type: "SET_VCONFIG", payload: payload });
	};

	return (
		<>
			<Divider />
			<List
				sx={{
					width: "100%",
					paddingTop: "10px",
					paddingLeft: "50px",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
						paddingTop: "15px",
					}}
				>
					<LengthInput />
				</ListItem>
				<ListItem
					key={2}
					disableGutters
					sx={{
						padding: 0,
						paddingTop: "20px",
					}}
				>
					<TextField
						id="decimal"
						label="Decimal places"
						variant="outlined"
						autoComplete="off"
						size="small"
						select
						sx={{
							width: "150px",
						}}
						value={column.valueConfig.decimalPlaces}
						onChange={decimalChangeHandler}
						// onKeyDown={(e) => {
						// 	if (e.key === "Enter") {
						// 		e.target.blur();
						// 	}
						// }}
						// inputProps={{
						// 	onBlur: lengthChangeHandler,
						// }}
					>
						{decimalPlaces.map((val) => (
							<MenuItem key={val} value={val}>
								{val}
							</MenuItem>
						))}
					</TextField>
				</ListItem>
			</List>
		</>
	);
}

export default NumberValues;
