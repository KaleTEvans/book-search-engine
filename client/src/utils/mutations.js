import { gql } from '@apollo/react-hooks';

export const LOGIN_USER = gql`
	mutation login($email:String!, $password:String!) {
		login(email:$email, password:$password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username:String!, $email:String!, $password:String!) {
		addUser(username:$username, email:$email, password:$password) {
			token
			user {
				_id
			}
		}
	}
`;

export const SAVE_BOOK = gql`
	mutation saveBook($bookId:ID!, $authors:[String], $description:String, $title:String, $image:String, $link:String) {
		saveBook(bookId:$bookId, authors:$authors, description:$description, title:$title, image:$image, link:$link) {
			username
			email
			savedBooks {
				bookId
				title
				description
				authors
			}
		}
  	}
`;

export const REMOVE_BOOK = gql`
	mutation removeBook($bookId:ID!) {
		removeBook(bookId:$bookId) {
			username
			email
			savedBooks {
				bookId
				title
				description
				authors
			}
		}
	}
`;