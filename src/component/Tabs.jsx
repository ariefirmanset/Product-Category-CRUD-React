import Button from "./Button";
import Menu from "./menu";

export default function Tabs({ selected, onSelect }) {
  return (
    <Menu>
      <Button
        title="List Data"
        Class={selected === "list" ? "active" : ""}
        onClick={() => onSelect("list")}
      ></Button>
      <Button
        title="Create"
        Class={selected === "create" ? "active" : ""}
        onClick={() => onSelect("create")}
      ></Button>
    </Menu>
  );
}
