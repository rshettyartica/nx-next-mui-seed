// import styles from './index.module.css';
import { GetStaticProps } from 'next';
import FolderTree from '@nx-next-mui-seed/shared/ui/material/component/folder-tree/folder-tree';
import Chart from '@nx-next-mui-seed/shared/ui/material/component/chart/chart';
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to About, {props.name}!</h1>

      <FolderTree />

      <Chart />
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      name: 'Rahul',
    },
  };
};

export default About;
