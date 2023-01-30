import { Dispatch } from "react";
import { ActionType } from ".";

interface Props {
  item: { task: string; isChecked: boolean };
  handleCheck: Dispatch<ActionType>;
}
const Item: React.FC<Props> = ({ item, handleCheck }) => {
  return (
    <div className="bg-gray-200 rounded-lg flex justify-between px-5">
      <div className={item.isChecked ? "line-through truncate" : "truncate"}>
        {item.task}
      </div>
      <input
        type="checkbox"
        defaultChecked={item.isChecked}
        onChange={() =>
          handleCheck({ task: item.task, isChecked: !item.isChecked })
        }
      />
    </div>
  );
};
export default Item;
