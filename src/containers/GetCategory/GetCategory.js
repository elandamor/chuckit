import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import getCategory from './actions';

import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class GetCategory extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(getCategory(match.params.category));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, match } = this.props;
    const currentCategory = match.params.category;
    const newCategory = nextProps.match.params.category;

    if (currentCategory !== newCategory) {
      dispatch(getCategory(newCategory));
    }
  }

  render() {
    const { category, error, loading } = this.props;

    if (error) {
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }

    if (loading) {
      return (
        <h3>
          Loading...
        </h3>
      );
    }

    return (
      <Wrapper className="c-categories">
        {JSON.stringify(category)}
      </Wrapper>
    );
  }
}

GetCategory.defaultProps = {
  category: {},
  error: null,
  loading: true,
};

GetCategory.propTypes = {
  category: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  category: {
    category,
    error,
    loading,
  },
}) => ({
  category,
  error,
  loading,
});

export default connect(mapStateToProps)(GetCategory);
