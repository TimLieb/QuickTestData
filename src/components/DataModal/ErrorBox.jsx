import { Box, Typography } from "@mui/material";

function ErrorBox({ errArr }) {
	return (
		<Box sx={{ maxWidth: "500px" }}>
			<Typography
				variant="subtitle2"
				sx={{ color: "red", paddingBottom: "30px" }}
			>
				An error occured while generating the data, please check the
				messages below and ensure there are no errors within the
				specified columns.
			</Typography>
			{errArr.map((err, i) => (
				<Typography
					key={i}
					variant="subtitle1"
				>{`Error: "${err}"`}</Typography>
			))}
		</Box>
	);
}

export default ErrorBox;
