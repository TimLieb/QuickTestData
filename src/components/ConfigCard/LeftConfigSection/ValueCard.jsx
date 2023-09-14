import * as React from "react";
import {
	Divider,
	TextField,
	FormGroup,
	FormControlLabel,
	Checkbox,
	List,
	ListItem,
} from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../context/ColumnsContext";

function ValueCard() {
	const columnsDispatch = useColumnsDispatch();
	const column = useCurrentColumn();

	const lengthChangeHandler = (event) => {
		const payload = {
			...column.valueConfig,
			length: event.target.value,
		};
		columnsDispatch({
			type: "SET_VCONFIG",
			payload: payload,
		});
	};

	const checkBoxChangeHandler = (event) => {
		const payload = () => {
			switch (event.target.name) {
				case "lowerCase":
					return {
						...column.valueConfig,
						lowerCase: !column.valueConfig.lowerCase,
					};
				case "upperCase":
					return {
						...column.valueConfig,
						upperCase: !column.valueConfig.upperCase,
					};
				case "numbers":
					return {
						...column.valueConfig,
						numbers: !column.valueConfig.numbers,
					};
				case "special":
					return {
						...column.valueConfig,
						special: !column.valueConfig.special,
					};
			}
		};

		// const payload = {
		// 	...column.valueConfig,
		// 	lowerCase: !column.valueConfig.lowerCase,
		// };
		columnsDispatch({
			type: "SET_VCONFIG",
			payload: payload(),
		});
	};

	return (
		<>
			<Divider />
			<List
				sx={{
					width: "100%",
					paddingLeft: "20px",
					paddingTop: "15px",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
					}}
				>
					<TextField
						id="stringLength"
						label="Length"
						variant="outlined"
						helperText="Integer or Range e.g '3' or '3-9'"
						autoComplete="off"
						size="small"
						defaultValue={column.valueConfig.length}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.target.blur();
							}
						}}
						inputProps={{
							onBlur: lengthChangeHandler,
						}}
					/>
				</ListItem>
				<ListItem
					key={2}
					sx={{
						padding: 0,
						paddingTop: "10px",
					}}
				>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									name="lowerCase"
									checked={column.valueConfig.lowerCase}
									onChange={checkBoxChangeHandler}
								/>
							}
							label="Lowercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									name="upperCase"
									checked={column.valueConfig.upperCase}
									onChange={checkBoxChangeHandler}
								/>
							}
							label="Uppercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									name="numbers"
									checked={column.valueConfig.numbers}
									onChange={checkBoxChangeHandler}
								/>
							}
							label="Numbers"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={
								<Checkbox
									name="special"
									checked={column.valueConfig.special}
									onChange={checkBoxChangeHandler}
								/>
							}
							label="Special characters"
							sx={{
								height: "38px",
							}}
						/>
					</FormGroup>
				</ListItem>
			</List>
		</>
	);
}

export default ValueCard;
