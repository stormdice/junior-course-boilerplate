import React from 'react';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import ProductPrice from '../ProductPrice';
import { RatingStar } from './ProductList.styled';
import { Container } from './ProductList.styled';

const renderPrice = (price, isSubPrice = false) =>
  price ? <ProductPrice price={price} isSubPrice={isSubPrice} /> : '';

const ratingComponent = ({ isFilled }) => <RatingStar filled={isFilled} />;

const ProductsList = ({ products }) => (
  <Container>
    {products.map(
      ({
        id,
        isInStock,
        img,
        title,
        price,
        subPriceContent,
        maxRating,
        rating
      }) => (
        <ProductItem
          key={id}
          data-testid="product-list-item"
          isInStock={isInStock}
          img={img}
          title={title}
          price={renderPrice(price)}
          subPriceContent={renderPrice(subPriceContent, true)}
          maxRating={maxRating}
          rating={rating}
          ratingComponent={ratingComponent}
        />
      )
    )}
  </Container>
);

ProductsList.propTypes = {
  products: pt.array.isRequired
};

export default ProductsList;
