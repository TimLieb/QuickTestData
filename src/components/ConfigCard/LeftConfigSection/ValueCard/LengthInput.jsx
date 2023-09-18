import { TextField } from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../../context/ColumnsContext";
import { validateLength } from "../../../../helpers/DataValidation";

function LengthInput() {
	const column = useCurrentColumn();
	const columnsDispatch = useColumnsDispatch();

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

	return (
		<>
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
		</>
	);
}

export default LengthInput;
