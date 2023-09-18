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
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import enGB from "date-fns/locale/en-GB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { parseISO } from "date-fns";

function DateValues() {
	const column = useCurrentColumn();
	const columnsDispatch = useColumnsDispatch();

	const changeHandler = (event) => {
		const payload = validateBoolBoxes(event.target.name, column);
		columnsDispatch({ type: "SET_VCONFIG", payload: payload });
	};

	return (
		<>
			<Divider />
			<LocalizationProvider
				dateAdapter={AdapterDateFns}
				adapterLocale={enGB}
			>
				<DesktopDatePicker defaultValue={parseISO("2022-04-17")} />
			</LocalizationProvider>
		</>
	);
}

export default DateValues;
