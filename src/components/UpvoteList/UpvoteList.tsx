import { FC, useCallback, useContext, useState } from "react";
import Plus from "../../assets/plus-svgrepo-com.svg?react";
import styles from "./UpvoteList.module.css";
import Button from "../Button";
import Upvote from "../Upvote";
import DataContext from "../../provider/DataContext";

interface UpvoteListProps {
  list: number[];
  idx: number;
}

const UpvoteList: FC<UpvoteListProps> = ({ list, idx }) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = useCallback(() => setSelected((prev) => !prev), []);

  const { addVote } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {list.map((key) => (
          <Upvote key={key} selected={selected} handleSelect={handleSelect} />
        ))}
      </div>
      <Button onClick={() => addVote(idx)} ariaLabel="Plus button">
        <Plus />
      </Button>
    </div>
  );
};

export default UpvoteList;
