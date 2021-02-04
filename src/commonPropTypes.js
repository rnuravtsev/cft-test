export const commentsType = PropTypes.arrayOf(PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
})).isRequired;

export const postsType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
})).isRequired;

export const usersType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      lng: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }))
  }),
  company: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    bs: PropTypes.string
  }))
})).isRequired;
