import { Box, Checkbox, Divider, FormControlLabel } from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../../context/ColumnsContext";
import {
	DesktopDatePicker,
	LocalizationProvider,
	TimePicker,
} from "@mui/x-date-pickers";
import enGB from "date-fns/locale/en-GB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { parseISO, format, parse } from "date-fns";
import moment from "moment/moment";
import { validateDates } from "../../../../helpers/DataValidation";

function DateValues() {
	const column = useCurrentColumn();
	const columnsDispatch = useColumnsDispatch();

	const changeHandler = (event, type, section) => {
		const date = validateDates(column, event, type, section);
		let payload = {};
		switch (section) {
			case "sDate":
				payload = {
					...column.valueConfig,
					startDate: date,
				};
				break;
			case "eDate":
				payload = {
					...column.valueConfig,
					endDate: date,
				};
				break;
			case "sTime":
				payload = {
					...column.valueConfig,
					startTime: date,
				};
				break;
			case "eTime":
				payload = {
					...column.valueConfig,
					endTime: date,
				};
				break;
		}
		columnsDispatch({ type: "SET_VCONFIG", payload: payload });
	};

	const timeChangeHandler = () => {
		const payload = {
			...column.valueConfig,
			time: !column.valueConfig.time,
		};
		columnsDispatch({ type: "SET_VCONFIG", payload: payload });
	};

	return (
		<>
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
							alignItems: "center",
							paddingTop: "25px",
							justifyContent: "right",
						}}
					>
						<LocalizationProvider
							dateAdapter={AdapterDateFns}
							adapterLocale={enGB}
						>
							<DesktopDatePicker
								label="Start"
								maxDate={parseISO(column.valueConfig.endDate)}
								defaultValue={parseISO(
									column.valueConfig.startDate
								)}
								onAccept={(e) =>
									changeHandler(e, "accept", "sDate")
								}
								slotProps={{
									textField: {
										size: "small",
										onBlur: (e) =>
											changeHandler(e, "blur", "sDate"),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.target.blur();
											}
										},
									},
								}}
							/>
						</LocalizationProvider>
					</Box>
					<Box
						sx={{
							display: "flex",
							paddingTop: "25px",
							alignItems: "center",
							justifyContent: "right",
						}}
					>
						<LocalizationProvider
							dateAdapter={AdapterDateFns}
							adapterLocale={enGB}
						>
							<DesktopDatePicker
								label="End"
								minDate={parseISO(column.valueConfig.startDate)}
								defaultValue={parseISO(
									column.valueConfig.endDate
								)}
								onAccept={(e) =>
									changeHandler(e, "accept", "eDate")
								}
								slotProps={{
									textField: {
										size: "small",
										onBlur: (e) =>
											changeHandler(e, "blur", "eDate"),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.target.blur();
											}
										},
									},
								}}
							/>
						</LocalizationProvider>
					</Box>
					<Box
						sx={{
							display: "flex",
							paddingTop: "25px",
							alignItems: "center",
							justifyContent: "left",
						}}
					>
						<FormControlLabel
							control={
								<Checkbox
									name="Time"
									checked={column.valueConfig.time}
									onChange={timeChangeHandler}
								/>
							}
							label="Time"
							sx={{
								height: "38px",
							}}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							paddingTop: "25px",
							alignItems: "center",
							justifyContent: "right",
						}}
					>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								disabled={!column.valueConfig.time}
								maxTime={parseISO(column.valueConfig.endTime)}
								label="Start"
								defaultValue={parseISO(
									column.valueConfig.startTime
								)}
								onAccept={(e) =>
									changeHandler(e, "accept", "sTime")
								}
								slotProps={{
									textField: {
										size: "small",
										onBlur: (e) =>
											changeHandler(e, "blur", "sTime"),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.target.blur();
											}
										},
									},
								}}
							/>
						</LocalizationProvider>
					</Box>
					<Box
						sx={{
							display: "flex",
							paddingTop: "25px",
							alignItems: "center",
							justifyContent: "right",
						}}
					>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<TimePicker
								disabled={!column.valueConfig.time}
								minTime={parseISO(column.valueConfig.startTime)}
								label="End"
								defaultValue={parseISO(
									column.valueConfig.endTime
								)}
								onAccept={(e) =>
									changeHandler(e, "accept", "eTime")
								}
								slotProps={{
									textField: {
										size: "small",
										onBlur: (e) =>
											changeHandler(e, "blur", "eTime"),
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.target.blur();
											}
										},
									},
								}}
							/>
						</LocalizationProvider>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default DateValues;
