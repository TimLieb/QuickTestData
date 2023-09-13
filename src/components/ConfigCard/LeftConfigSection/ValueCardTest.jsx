import { useState } from "react";
import { List, ListItem, TextField } from "@mui/material";

function ValueCardTest({ value, setValue }) {
	const changeHandler = (event) => {
		const temp = event.target.value;
		setValue(temp);
	};

	return (
		<>
			<List
				sx={{
					width: "100%",
					paddingLeft: "20px",
					paddingTop: "15px",
				}}
			>
				<ListItem
					key={1}
					disableGutters
					sx={{
						padding: 0,
					}}
				>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						helperText="Integer or Range e.g '3' or '3-9'"
						size="small"
						value={value}
						onChange={changeHandler}
					/>
				</ListItem>
			</List>
		</>
	);
}

export default ValueCardTest;
