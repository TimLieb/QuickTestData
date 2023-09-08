import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import { ListItemButton, ListItemIcon, TextField } from "@mui/material";

function ValueCard() {
	return (
		<>
			<List
				sx={{
					width: "100%",
					bgcolor: "background.paper",
					paddingLeft: "20px",
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
						id="stringLength"
						label="Length"
						variant="filled"
						helperText="Integer or Range e.g '3' or '3-9'"
					/>
				</ListItem>
			</List>
		</>
	);
}

export default ValueCard;
