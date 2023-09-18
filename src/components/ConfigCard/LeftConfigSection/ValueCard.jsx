import { useCurrentColumn } from "../../../context/ColumnsContext";
import StringValues from "./ValueCard/StringValues";
import NumberValues from "./ValueCard/NumberValues";
import BoolValues from "./ValueCard/BoolValues";

function ValueCard() {
	const column = useCurrentColumn();

	switch (true) {
		case column.type === "String":
			return <StringValues />;
		case column.type === "Number":
			return <NumberValues />;
		case column.type === "Boolean":
			return <BoolValues />;
	}
}

export default ValueCard;
