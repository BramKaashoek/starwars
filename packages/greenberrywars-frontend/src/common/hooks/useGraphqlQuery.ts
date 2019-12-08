import { DocumentNode } from 'graphql';
import { useQuery, QueryHookOptions } from 'react-apollo';

const useGraphqlQuery = <T>(
  query: DocumentNode,
  options: QueryHookOptions,
): { loading: boolean; data: T } => {
  // this hook would be where extra data such as headers would be added to a query
  const { loading, error, data } = useQuery(query, options);

  // This would go to sentry or somesuch in an actual production app.
  // A notification would also be sent to the user, depending on the error.
  if (error) console.error(error);

  return { loading, data };
};

export default useGraphqlQuery;
