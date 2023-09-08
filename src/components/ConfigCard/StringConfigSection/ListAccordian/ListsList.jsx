import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReadMoreSharpIcon from "@mui/icons-material/ReadMoreSharp";
import IconButton from "@mui/material/IconButton";
import { ListItemIcon } from "@mui/material";

function ListsList() {
	return (
		<List
			sx={{
				width: "100%",
				bgcolor: "background.paper",
				padding: "5px",
				paddingLeft: "50px",
			}}
		>
			{[1, 2, 3].map((value) => (
				<ListItem
					key={value}
					disableGutters
					sx={{
						padding: 0,
						height: "30px",
					}}
				>
					<ListItemIcon>
						<IconButton>
							<ReadMoreSharpIcon />
						</IconButton>
					</ListItemIcon>
					<ListItemText primary={`Line item ${value}`} />
				</ListItem>
			))}
		</List>
	);
}

export default ListsList;
