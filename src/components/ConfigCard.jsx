import { Box, Typography, Card, Divider } from "@mui/material";
import LeftConfigSection from "./ConfigCard/LeftConfigSection";
import { useColumnsValue, useCurrentColumn } from "../context/ColumnsContext";

function ConfigCard() {
	const columnsValue = useColumnsValue();
	const column = useCurrentColumn();
	const hasConfig = columnsValue.config !== null;

	return (
		<Card
			variant="outlined"
			sx={{
				width: "1313px",
				marginLeft: "5px",
				display: "flex",
			}}
		>
			<Box
				sx={{
					width: "75%",
				}}
			>
				<Typography variant="subtitle1" align="center" sx={{}}>
					Configure:{" "}
					<Box component="span" fontWeight="bold">
						{hasConfig
							? `${column.name}, ${column.type}`
							: "Select a row"}
					</Box>
				</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
					}}
				>
					{hasConfig ? (
						<LeftConfigSection />
					) : (
						<Typography
							variant="Subtitle1"
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "760px",
							}}
						>
							Select a row
						</Typography>
					)}
				</Box>
			</Box>
			<Divider orientation="vertical" flexItem={true} />
			<Box
				sx={{
					width: "25%",
				}}
			>
				<Typography variant="subtitle1" align="center" sx={{}}>
					Preview
				</Typography>
				<Divider />
			</Box>
		</Card>
	);
}

export default ConfigCard;
