import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getCategories from './actions';

import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class GetCategories extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCategories());
  }

  render() {
    const { categories, error, loading } = this.props;

    if (error) {
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }

    if (loading) {
      return (
        <h1>
          Loading...
        </h1>
      );
    }

    return (
      <Wrapper className="c-categories">
        {
          categories.length > 0 && categories.map((category) => (
            <li
              key={category}
              className="a-category"
            >
              <Link
                to={category}
              >
                {category}
              </Link>
            </li>
          ))
        }
      </Wrapper>
    );
  }
}

GetCategories.defaultProps = {
  categories: [],
  error: null,
  loading: true,
};

GetCategories.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = ({
  categories: {
    error,
    items: categories,
    loading,
  },
}) => ({
  categories,
  error,
  loading,
});

export default connect(mapStateToProps)(GetCategories);
