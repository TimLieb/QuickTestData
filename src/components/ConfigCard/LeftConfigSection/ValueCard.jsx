import * as React from "react";
import {
	Divider,
	TextField,
	FormGroup,
	FormControlLabel,
	Checkbox,
	List,
	ListItem,
	Box,
	Typography,
	FormControl,
	FormLabel,
	FormHelperText,
} from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../context/ColumnsContext";
import { validateBoxes, validateLength } from "../../../helpers/DataValidation";

function ValueCard() {
	const columnsDispatch = useColumnsDispatch();
	const column = useCurrentColumn();

	const lengthChangeHandler = (event) => {
		const length = event.target.value;
		const error = validateLength(length);
		const payload = {
			...column.valueConfig,
			lenError: error,
			length: length,
		};
		columnsDispatch({
			type: "SET_VCONFIG",
			payload: payload,
		});
	};

	const checkBoxChangeHandler = (event) => {
		const payload = validateBoxes(event.target.name, column);

		columnsDispatch({
			type: "SET_VCONFIG",
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
						error={column.valueConfig.lenError}
						id="stringLength"
						label="Length"
						variant="outlined"
						helperText="Integer or Range e.g '3' or '3-9', max 50"
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
					<FormControl>
						<FormGroup>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<FormControlLabel
									control={
										<Checkbox
											name="lowerCase"
											checked={
												column.valueConfig.lowerCase
											}
											onChange={checkBoxChangeHandler}
										/>
									}
									label="Lowercase characters"
									sx={{
										height: "38px",
									}}
								/>
								<Typography
									variant="caption"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									(a-z)
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<FormControlLabel
									control={
										<Checkbox
											name="upperCase"
											checked={
												column.valueConfig.upperCase
											}
											onChange={checkBoxChangeHandler}
										/>
									}
									label="Uppercase characters"
									sx={{
										height: "38px",
									}}
								/>
								<Typography
									variant="caption"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									(A-Z)
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
								}}
							>
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
								<Typography
									variant="caption"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									(0-9)
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
								}}
							>
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
								<Typography
									variant="caption"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									(!?$%-_#)
								</Typography>
							</Box>
							<FormHelperText sx={{ color: "#d32f2f" }}>
								{column.valueConfig.boxError
									? "Please choose at least one option"
									: ""}
							</FormHelperText>
						</FormGroup>
					</FormControl>
				</ListItem>
			</List>
		</>
	);
}

export default ValueCard;
