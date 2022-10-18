import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface UserProps extends ParsedUrlQuery {
  id: string;
}

export function Id(props: UserProps) {
  return (
    <div>
      <h1>Viewing User ID {props.id}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<UserProps> = async () => {
  return {
    paths: [1, 2, 3].map((id) => {
      return {
        params: {
          id: id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<UserProps> = async ({
  params,
}: {
  params: UserProps;
}) => {
  return {
    props: {
      id: params.id,
    },
  };
};

export default Id;
