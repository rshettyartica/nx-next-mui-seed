import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './toolbar.module.css';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export function Toolbar(props: ToolbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Toolbar!</h1>

      <Box>
        <Button variant="contained" size="small">
          Hello World
        </Button>
      </Box>
    </div>
  );
}

export default Toolbar;
