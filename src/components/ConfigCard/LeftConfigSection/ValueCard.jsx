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
import { useColumnsDispatch } from "../../../context/ColumnsContext";
import { useEffect } from "react";

function ValueCard() {
	const columnsDispatch = useColumnsDispatch();

	useEffect(() => {
		columnsDispatch({ type: "UPDATE", payload: configValue });
	}, [configValue]);

	const lengthChangeHandler = (event) => {
		const payload = event.target.value;
		configDispatch({
			type: "UPDATE_LENGTH",
			payload: payload,
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
						defaultValue={configValue.valueConfig.length}
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
							control={<Checkbox defaultChecked />}
							label="Lowercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Uppercase characters"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Numbers"
							sx={{
								height: "38px",
							}}
						/>
						<FormControlLabel
							control={<Checkbox />}
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
