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
          <th className={`${styles.th} ${styles.col}`}>ID</th>
          <th className={`${styles.th} ${styles.col}`}>Name</th>
          <th className={`${styles.th} ${styles.email}`}>Email</th>
          <th className={`${styles.th} ${styles.col}`}>Role</th>
        </tr>
      </thead>
      <tbody>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <>
            {[...Array(10)].map((_, index) => {
              return (
                <tr key={index} className={styles.trloading}>
                  <td className={`${styles.td} ${styles.col}`} />
                  <td className={`${styles.td} ${styles.col}`} />
                  <td className={`${styles.td} ${styles.email}`} />
                  <td className={`${styles.td} ${styles.col}`} />
                </tr>
              );
            })}
          </>
        ) : (
          <>
            {data.map((item) => (
              <tr key={item.id} className={styles.tr}>
                <td className={`${styles.td} ${styles.col}`}>{item.id}</td>
                <td className={`${styles.td} ${styles.col}`}>{item.name}</td>
                <td className={`${styles.td} ${styles.email}`}>{item.email}</td>
                <td className={`${styles.td} ${styles.col}`}>{item.role}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default Index;
