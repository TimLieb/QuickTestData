import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import {
	useColumnsDispatch,
	useCurrentColumn,
} from "../../../context/ColumnsContext";

function RandomiserSelecter() {
	const column = useCurrentColumn();
	const randomiser = column.configType;
	const type = column.type;
	const columnsDispatch = useColumnsDispatch();

	function handleRandomiserClick() {
		const newRandomiser = randomiser === "list" ? "value" : "list";
		columnsDispatch({ type: "SET_RANDOMISER", payload: newRandomiser });
	}

	const selButtonSX = {
		width: "50%",
		borderRadius: "0",
		boxShadow: "0",
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
		switch (true) {
			case type !== "String":
				return (
					<>
						<Button sx={unSelButtonSX} disabled>
							LIST
						</Button>
						<Button variant="contained" sx={selButtonSX}>
							VALUE
						</Button>
					</>
				);
			case randomiser === "list":
				return (
					<>
						<Button variant="contained" sx={selButtonSX}>
							LIST
						</Button>
						<Button
							sx={unSelButtonSX}
							onClick={handleRandomiserClick}
						>
							VALUE
						</Button>
					</>
				);
			case randomiser === "value":
				return (
					<>
						<Button
							sx={unSelButtonSX}
							onClick={handleRandomiserClick}
						>
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
					width: "100%",
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
					Randomiser:
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
