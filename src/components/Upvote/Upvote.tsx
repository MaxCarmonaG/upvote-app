import { FC } from "react";
import ArrowUp from "../../assets/arrow-upward-svgrepo-com.svg?react";
import Button from "../Button";

interface UpvoteProps {
  selected: boolean;
  handleSelect: () => void;
}

const Upvote: FC<UpvoteProps> = ({ selected, handleSelect }) => (
  <Button selected={selected} onClick={handleSelect} ariaLabel="Upvote button">
    <ArrowUp />
  </Button>
);

export default Upvote;
