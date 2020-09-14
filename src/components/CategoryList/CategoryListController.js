import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/actions';
import CategoryListPresenter from './CategoryListPresenter';

class CategoryListController extends Component {
  addCategoriesQueryToUrl() {
    const url = new URL(window.location.href);

    url.searchParams.set('categories', this.props.categories);
    window.history.pushState(null, null, url);
  }

  parseCategoriesQueryFromUrl = () => {
    const url = new URL(window.location.href);
    const categories = url.searchParams.get('categories');

    this.setState({
      categories: categories ? categories.split(',') : []
    });
  };

  getChangeHandler = fieldName => isChecked => {
    const uniqueCategories = new Set(this.props.categories);
    const method = isChecked ? 'add' : 'delete';
    uniqueCategories[method](fieldName);

    this.props.changeCategory([...uniqueCategories]);
  };

  componentDidMount() {
    this.parseCategoriesQueryFromUrl();

    window.addEventListener('popstate', this.parseCategoriesQueryFromUrl);
  }

  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.categories !== this.props.categories) {
      this.addCategoriesQueryToUrl();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.parseCategoriesQueryFromUrl);
  }

  render() {
    const { categories } = this.props;

    return (
      <CategoryListPresenter
        getCategoryChangeHandler={this.getChangeHandler}
        categories={categories}
      />
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  changeCategory: categories => dispatch(changeCategory(categories))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListController);
