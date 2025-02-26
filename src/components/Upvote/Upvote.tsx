import { FC } from "react";
import ArrowUp from "@/assets/arrow-upward-svgrepo-com.svg?react";
import Button from "@/components/Button";

interface UpvoteProps {
  selected: boolean;
  onClick: () => void;
}

const Upvote: FC<UpvoteProps> = ({ selected, onClick }) => (
  <Button selected={selected} onClick={onClick} ariaLabel="Upvote button">
    <ArrowUp />
  </Button>
);

export default Upvote;
