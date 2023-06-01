'use client';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import HeroDetail from '@/components/detail/Hero';
import Product from '@/components/detail/Product';
import { ProductContext } from '@/context/GlobalState';
import React, { useEffect, useState } from 'react';

const prod = ({ params }) => {
  const [itemsProduct, setItemsProducts] = useState();
  const { products, addToCart } = ProductContext();
  const productId = params.id;
  const productSpreed = [...products.burgers, ...products.sides, ...products.drinks];

  useEffect(() => {
    const foundItem = productSpreed.find((item) => item.id == productId);
    setItemsProducts(foundItem);
  }, [products, productId]);

  return (
    <Layout>
      <Container>
        <HeroDetail item={itemsProduct} />
        <Product item={itemsProduct} addToCart={addToCart} />
      </Container>
    </Layout>
  );
};

export default prod;
