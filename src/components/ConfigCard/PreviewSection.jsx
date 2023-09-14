import { Box, Divider, Typography } from "@mui/material";

function PreviewSection() {
	return (
		<>
			<Box
				sx={{
					width: "34%",
					minWidth: "300px",
				}}
			>
				<Typography
					variant="subtitle1"
					sx={{
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					Preview
				</Typography>
				<Divider />
			</Box>
		</>
	);
}

export default PreviewSection;
