import Button from "../../../ui/Button";
import Styles from "./Pagination.module.css";

type Props = {
  currentPage: number;
  totalPages: number;
  onClick: (page: number) => void;
};

const index = ({ currentPage, totalPages, onClick }: Props) => {
  return (
    <div className={Styles.pagination}>
      <Button
        onClick={() => onClick(currentPage - 1)}
        disabled={currentPage === 1}
        label="Previous"
      />
      <Button disabled={true} label={currentPage} />
      <Button
        onClick={() => onClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        label="Next"
      />
    </div>
  );
};

export default index;
