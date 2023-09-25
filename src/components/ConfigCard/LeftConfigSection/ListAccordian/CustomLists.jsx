import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import {
	Box,
	Button,
	Divider,
	IconButton,
	ListItemButton,
	ListItemIcon,
	Modal,
	Typography,
} from "@mui/material";
import ListCreator from "./CustomLists/ListCreator";
import {
	useCustomListDispatch,
	useCustomListValue,
} from "../../../../context/CustomListContext";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";

function CustomLists() {
	const [listId, setListId] = useState("");
	const listValue = useCustomListValue();
	const listDispatch = useCustomListDispatch();

	const editHandler = (event, targetId) => {
		setListId(targetId);
	};

	const deleteHandler = (event, targetId) => {
		listDispatch({ type: "DELETE", payload: targetId });
	};

	return (
		<>
			<List
				sx={{
					width: "100%",
					bgcolor: "background.paper",
				}}
			>
				{listValue.map((list) => {
					return (
						<ListItem
							key={list.id}
							disableGutters
							sx={{
								padding: 0,
							}}
						>
							<ListItemButton
								sx={{
									padding: 0,
									":hover": {
										bgcolor: (theme) =>
											theme.palette.divider,
									},
								}}
							>
								<ListItemIcon
									sx={{
										width: "24px",
										minWidth: "24px",
										height: "24px",
										marginLeft: "70px",
									}}
								>
									<DescriptionIcon />
								</ListItemIcon>
								<ListItemText
									primary={list.name}
									sx={{
										paddingTop: "3px",
									}}
								/>
							</ListItemButton>
							<IconButton
								onClick={(event) => editHandler(event, list.id)}
							>
								<ModeEditIcon />
							</IconButton>
							<IconButton
								onClick={(event) =>
									deleteHandler(event, list.id)
								}
							>
								<DeleteOutlineIcon />
							</IconButton>
						</ListItem>
					);
				})}
			</List>
			<Divider />
			<ListCreator listId={listId} setListId={setListId} />
		</>
	);
}

export default CustomLists;
