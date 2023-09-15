import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	TextField,
	Typography,
} from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../context/ColumnsContext";
import { validatePercentages } from "../../helpers/DataValidation";

function RightConfigSection() {
	const columnsDispatch = useColumnsDispatch();
	const column = useCurrentColumn();

	const changeHandler = (event) => {
		switch (event.target.name) {
			case "nullsVal":
				var payload = {
					...column.addConfig,
					nullsVal: event.target.value,
					error: validatePercentages(
						event.target.value,
						column.addConfig.emptiesVal
					),
				};
				break;
			case "emptiesVal":
				var payload = {
					...column.addConfig,
					emptiesVal: event.target.value,
					error: validatePercentages(
						column.addConfig.nullsVal,
						event.target.value
					),
				};
				break;
		}

		columnsDispatch({ type: "SET_ACONFIG", payload: payload });
	};

	const NullInput = () => {
		return (
			<TextField
				error={column.addConfig.error}
				id="nullsVal"
				name="nullsVal"
				label="%"
				variant="outlined"
				autoComplete="off"
				size="small"
				defaultValue={column.addConfig.nullsVal}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.target.blur();
					}
				}}
				inputProps={{
					onBlur: changeHandler,
					style: { textAlign: "center" },
				}}
				sx={{
					width: "55px",
				}}
			/>
		);
	};

	const EmptyInput = () => {
		return (
			<TextField
				error={column.addConfig.error}
				id="emptiesVal"
				name="emptiesVal"
				label="%"
				variant="outlined"
				autoComplete="off"
				size="small"
				defaultValue={column.addConfig.emptiesVal}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						e.target.blur();
					}
				}}
				inputProps={{
					onBlur: changeHandler,
					style: { textAlign: "center" },
				}}
				sx={{
					width: "55px",
				}}
			/>
		);
	};

	return (
		<>
			<Box
				sx={{
					width: "34%",
					minWidth: "300px",
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Additional Details
				</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box>
						<Box
							sx={{
								display: "flex",
								paddingTop: "25px",
								alignItems: "center",
							}}
						>
							<Typography minWidth="70px">Nulls</Typography>
							<NullInput />
						</Box>
						<Box
							sx={{
								display: "flex",
								paddingTop: "25px",
								alignItems: "center",
							}}
						>
							<Typography minWidth="70px">Empties</Typography>
							<EmptyInput />
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default RightConfigSection;
