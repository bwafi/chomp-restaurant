import Container from '@/components/Container';
import Layout from '@/components/Layout';
import HeroOrder from '@/components/order/Hero';
import Products from '@/components/order/Products';

const Order = () => {
  return (
    <Layout>
      <Container>
        <HeroOrder />
        <Products />
      </Container>
    </Layout>
  );
};

export default Order;
