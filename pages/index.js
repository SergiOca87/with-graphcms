import graphql from '../lib/graphql';
import getAllProducts from '../lib/graphql/queries/getAllProducts';
import ProductsGrid from '../components/ProductsGrid';

export const getStaticProps = async () => {
	const { products } = await graphql.request(getAllProducts);

	return {
		revalidate: 60,
		props: { products },
	};
};

export default function Home({ products }) {
	return <ProductsGrid products={products} />;
}
