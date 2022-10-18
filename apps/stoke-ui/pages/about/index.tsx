import styles from './index.module.css';
import { GetStaticProps } from 'next';

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to About, {props.name}!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Rahul',
    },
  };
};

export default About;
