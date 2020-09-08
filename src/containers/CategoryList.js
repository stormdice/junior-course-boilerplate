import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../store/actions';
import CategoryListView from '../components/CategoryList';

class CategoryList extends Component {
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

  getChangeHandlerForCategories = fieldName => {
    return isChecked => {
      const uniqueCategories = new Set(this.props.categories);
      const method = isChecked ? 'add' : 'delete';
      uniqueCategories[method](fieldName);

      this.props.changeCategory([...uniqueCategories]);
    };
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
      <CategoryListView
        handleCategoryChange={this.getChangeHandlerForCategories}
        categories={categories}
      />
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategory: categories => dispatch(changeCategory(categories))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
