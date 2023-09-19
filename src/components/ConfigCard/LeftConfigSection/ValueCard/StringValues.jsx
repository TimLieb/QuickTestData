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
} from "../../../../context/ColumnsContext";
import {
	validateBoxes,
	validateLength,
} from "../../../../helpers/DataValidation";
import LengthInput from "./LengthInput";

function StringValues() {
	const columnsDispatch = useColumnsDispatch();
	const column = useCurrentColumn();

	const checkboxChangeHandler = (event) => {
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
					paddingTop: "10px",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
						paddingTop: "15px",
						justifyContent: "center",
					}}
				>
					<LengthInput />
				</ListItem>
				<ListItem
					key={2}
					sx={{
						padding: 0,
						paddingTop: "10px",
						justifyContent: "center",
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
											onChange={checkboxChangeHandler}
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
											onChange={checkboxChangeHandler}
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
											onChange={checkboxChangeHandler}
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
											onChange={checkboxChangeHandler}
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

export default StringValues;
