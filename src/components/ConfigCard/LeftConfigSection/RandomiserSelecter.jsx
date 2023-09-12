import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import {
	useConfigValue,
	useConfigDispatch,
} from "../../../context/ConfigContext";
import { useColumnsDispatch } from "../../../context/ColumnsContext";
import { useEffect } from "react";

function RandomiserSelecter() {
	const configDispatch = useConfigDispatch();
	const configValue = useConfigValue();
	const randomiser = configValue.configType;
	const columnsDispatch = useColumnsDispatch();

	useEffect(() => {
		columnsDispatch({ type: "UPDATE", payload: configValue });
	}, [configValue]);

	function handleRandomiserClick() {
		const newRandomiser = randomiser === "list" ? "value" : "list";
		configDispatch({ type: "SET_RANDOMISER", payload: newRandomiser });
	}

	const selButtonSX = {
		width: "50%",
		borderRadius: "0",
		boxShadow: "0",
		borderRadius: 0,
		":hover": {
			boxShadow: 0,
			bgcolor: (theme) => theme.palette.primary.main,
		},
	};

	const unSelButtonSX = {
		width: "50%",
		borderRadius: 0,
		":hover": {
			bgcolor: (theme) => theme.palette.divider,
		},
	};

	function RandomButtons() {
		if (randomiser === "list") {
			return (
				<>
					<Button variant="contained" sx={selButtonSX}>
						LIST
					</Button>
					<Button sx={unSelButtonSX} onClick={handleRandomiserClick}>
						VALUE
					</Button>
				</>
			);
		} else {
			return (
				<>
					<Button sx={unSelButtonSX} onClick={handleRandomiserClick}>
						LIST
					</Button>
					<Button variant="contained" sx={selButtonSX}>
						VALUE
					</Button>
				</>
			);
		}
	}

	return (
		<>
			<Box
				sx={{
					height: "40px",
					display: "flex",
					verticalAlign: "middle",
				}}
			>
				<Typography
					sx={{
						width: "40%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Randomiser Type:
				</Typography>
				<Divider orientation="vertical" flexItem={true} />
				<ButtonGroup
					variant="text"
					aria-label="text button group"
					sx={{
						width: "60%",
					}}
				>
					<RandomButtons />
				</ButtonGroup>
			</Box>
		</>
	);
}

export default RandomiserSelecter;
