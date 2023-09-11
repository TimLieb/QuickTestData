import { Box, Divider, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import RandomiserSelecter from "./LeftConfigSection/RandomiserSelecter";
import ListAccordion from "./LeftConfigSection/ListAccordian";
import ValueCard from "./LeftConfigSection/ValueCard";

function LeftConfigSection() {
	const [randomiser, setRandomiser] = useState("value");

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
			</Box>
			<Divider orientation="vertical" flexItem={true} />
		</Box>
	);
}

export default LeftConfigSection;
