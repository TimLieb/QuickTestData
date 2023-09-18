import {
	Box,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
} from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../../context/ColumnsContext";
import { validateBoolBoxes } from "../../../../helpers/DataValidation";

function BoolValues() {
	const column = useCurrentColumn();
	const columnsDispatch = useColumnsDispatch();

	const changeHandler = (event) => {
		const payload = validateBoolBoxes(event.target.name, column);
		columnsDispatch({ type: "SET_VCONFIG", payload: payload });
	};

	return (
		<>
			<Divider />
			<FormControl
				sx={{
					paddingTop: "15px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<FormGroup sx={{ width: "230px" }}>
					<Box
						sx={{
							display: "flex",
						}}
					>
						<FormControlLabel
							control={
								<Checkbox
									name="true"
									checked={column.valueConfig.true}
									onChange={changeHandler}
								/>
							}
							label="true"
							sx={{
								height: "38px",
							}}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
						}}
					>
						<FormControlLabel
							control={
								<Checkbox
									name="false"
									checked={column.valueConfig.false}
									onChange={changeHandler}
								/>
							}
							label="false"
							sx={{
								height: "38px",
							}}
						/>
					</Box>
					<FormHelperText sx={{ color: "#d32f2f" }}>
						{column.valueConfig.error
							? "Please choose at least one option"
							: ""}
					</FormHelperText>
				</FormGroup>
			</FormControl>
		</>
	);
}

export default BoolValues;
