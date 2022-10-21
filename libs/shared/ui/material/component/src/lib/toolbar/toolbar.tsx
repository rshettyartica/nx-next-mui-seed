import styles from './toolbar.module.css';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export function Toolbar(props: ToolbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Toolbar!</h1>
    </div>
  );
}

export default Toolbar;
