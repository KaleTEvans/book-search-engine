  import { gql } from '@apollo/react-hooks';

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			savedBooks {
				bookId
				title
				description
				authors
				image
				link
			}
		}
	}
`;