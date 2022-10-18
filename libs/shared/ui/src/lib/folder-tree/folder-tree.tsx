import styles from './folder-tree.module.css';

/* eslint-disable-next-line */
export interface FolderTreeProps {}

export function FolderTree(props: FolderTreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FolderTree!</h1>
    </div>
  );
}

export default FolderTree;
