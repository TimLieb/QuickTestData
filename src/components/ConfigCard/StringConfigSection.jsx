import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

function StringConfigSection() {
	const [randomiser, setRandomiser] = useState("list");

	function handleRandomiserClick() {
		const newRandomiser = randomiser === "list" ? "value" : "list";
		setRandomiser(newRandomiser);
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
		":hover": {
			boxShadow: 2,
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
		<Box
			sx={{
				display: "flex",
				height: "760px",
			}}
		>
			<Box
				sx={{
					width: "400px",
				}}
			>
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
				<Divider
					sx={{
						marginBottom: "2px",
					}}
					flexItem={true}
				/>
				<Divider flexItem={true} />
			</Box>
			<Divider orientation="vertical" flexItem={true} />
		</Box>
	);
}

export default StringConfigSection;
