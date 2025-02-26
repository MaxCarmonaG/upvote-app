import { FC, useContext } from "react";
import Plus from "@/assets/plus-svgrepo-com.svg?react";
import styles from "./UpvoteList.module.css";
import Button from "@/components/Button";
import Upvote from "@/components/Upvote";
import { DataContext } from "@/provider";

interface UpvoteListProps {
  list: number[];
  idx: number;
  selected: boolean;
}

const UpvoteList: FC<UpvoteListProps> = ({ list, idx, selected }) => {
  const { addVote, handleSelected } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {list.map((key) => (
          <Upvote
            key={key}
            selected={selected}
            onClick={() => handleSelected(idx)}
          />
        ))}
      </div>
      <Button onClick={() => addVote(idx)} ariaLabel="Plus button">
        <Plus />
      </Button>
    </div>
  );
};

export default UpvoteList;
