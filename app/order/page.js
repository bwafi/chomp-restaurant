import Container from '@/components/Container';
import Layout from '@/components/Layout';
import HeroOrder from '@/components/order/Hero';
import ProductsOrder from '@/components/order/ProductsOrder';

const Order = () => {
  return (
    <Layout>
      <Container>
        <HeroOrder />
        <ProductsOrder />
      </Container>
    </Layout>
  );
};

export default Order;
