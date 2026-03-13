import styles from "./Table.module.css";

type Props = {
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
  }[];
  loading?: boolean;
  error?: string | null;
};

const Index = ({ data, loading, error }: Props) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>ID</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>Role</th>
        </tr>
      </thead>
      <tbody>
        {error ? (
          <tr key={"1"} className={styles.trloading}>
            <td className={styles.td}>{error}</td>
          </tr>
        ) : loading ? (
          <>
            {[...Array(10)].map((_, index) => {
              return (
                <tr key={index} className={styles.trloading}>
                  <td className={styles.td} />
                  <td className={styles.td} />
                  <td className={styles.td} />
                  <td className={styles.td} />
                </tr>
              );
            })}
          </>
        ) : (
          <>
            {data.map((item) => (
              <tr key={item.id} className={styles.tr}>
                <td className={styles.td}>{item.id}</td>
                <td className={styles.td}>{item.name}</td>
                <td className={styles.td}>{item.email}</td>
                <td className={styles.td}>{item.role}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default Index;
