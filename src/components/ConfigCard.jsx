import { CssBaseline, Box, Typography, Card, Divider } from "@mui/material";

function ConfigCard({ selectedRow }) {
	return (
		<Card
			variant="outlined"
			sx={{
				width: "100%",
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
						{selectedRow.name}, {selectedRow.type}
					</Box>
				</Typography>
				<Divider variant="middle" />
				<Box></Box>
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
				<Divider variant="middle" />
			</Box>
		</Card>
	);
}

export default ConfigCard;
