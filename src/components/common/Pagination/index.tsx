import Button from "../../../ui/Button";
import Styles from "./Pagination.module.css";

type Props = {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
};

const index = ({ currentPage, onClick }: Props) => {
  return (
    <div className={Styles.pagination}>
      <Button onClick={() => onClick(currentPage - 1)} label="Previous" />
      <span className={Styles.pageNo}>{currentPage}</span>
      <Button onClick={() => onClick(currentPage + 1)} label="Next" />
    </div>
  );
};

export default index;
