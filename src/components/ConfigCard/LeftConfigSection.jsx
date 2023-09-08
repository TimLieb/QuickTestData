import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import RandomiserSelecter from "./StringConfigSection/RandomiserSelecter";
import ListAccordion from "./StringConfigSection/ListAccordian";
import ValueCard from "./StringConfigSection/ValueCard";

function LeftConfigSection() {
	const [randomiser, setRandomiser] = useState("list");

	function RandomiserCard() {
		const Card = randomiser === "list" ? <ListAccordion /> : <ValueCard />;
		return Card;
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
				<RandomiserSelecter
					randomiser={randomiser}
					setRandomiser={setRandomiser}
				/>
				<RandomiserCard />
				<Divider />
			</Box>
			<Divider orientation="vertical" flexItem={true} />
		</Box>
	);
}

export default LeftConfigSection;
