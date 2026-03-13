import Styles from "./Home.module.css";
type LayoutProps = {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  grid?: boolean;
  children: React.ReactNode;
};

const TITLE = "Select Location";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className={Styles.parent_section}>
        <div className={Styles.parent}>
          <h1 className={Styles.heading}>{TITLE}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
