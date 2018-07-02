import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import fetchJoke from './actions';

import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class GetJoke extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(fetchJoke(match.params.category));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, match } = this.props;
    const currentCategory = match.params.category;
    const newCategory = nextProps.match.params.category;

    if (currentCategory !== newCategory) {
      dispatch(fetchJoke(newCategory));
    }
  }

  render() {
    const { category, error, history, loading, match } = this.props;

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
      <Wrapper className="c-joke">
        <header
          className="c-header"
        >
          <button
            className="c-btn c-btn--close"
            type="button"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <h1 className="a-title">
            {match.params.category}
          </h1>
        </header>
        <section
          className="c-section"
        >
          <img src={category.icon_url} alt="Explicit icon" />
          <blockquote>
            {category.value}
          </blockquote>
        </section>
      </Wrapper>
    );
  }
}

GetJoke.defaultProps = {
  category: {},
  error: null,
  loading: true,
};

GetJoke.propTypes = {
  category: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  history: PropTypes.object.isRequired,
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

export default connect(mapStateToProps)(GetJoke);
