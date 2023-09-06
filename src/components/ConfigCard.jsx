import { CssBaseline, Box, Typography, Card, Divider } from "@mui/material";

function ConfigCard({ selectedRow }) {
	return (
		<Card
			variant="outlined"
			sx={{
				width: "100%",
				marginLeft: "5px",
			}}
		>
			<Typography variant="subtitle1" align="center" sx={{}}>
				Configure:{" "}
				<Box component="span" fontWeight="bold">
					{selectedRow.name}, {selectedRow.type}
				</Box>
			</Typography>
			<Divider variant="middle" />
			<Box
				sx={{
					display: "flex",
					height: "760px",
				}}
			>
				<Box
					sx={{
						width: "75%",
					}}
				></Box>
				<Divider
					orientation="vertical"
					flexItem={true}
					sx={{
						marginBottom: "8px",
					}}
				/>
				<Box
					sx={{
						width: "100px",
					}}
				></Box>
			</Box>
		</Card>
	);
}

export default ConfigCard;
