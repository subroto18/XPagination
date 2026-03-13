import Layout from "../common/Layout";
import Table from "../../components/common/Table";
import useUser from "../../hooks/useUser";
import Pagination from "../common/Pagination";
import { useState } from "react";

const itemsPerPage = 10;

const Index = () => {
  const { users, loading, error } = useUser();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = users.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <Layout>
      <Table loading={loading} error={error} data={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={handlePageChange}
      />
    </Layout>
  );
};

export default Index;
