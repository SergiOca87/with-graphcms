import graphql from '../../lib/graphql';
import getAllProducts from '../../lib/graphql/queries/getAllProducts';
import getProductDetail from '../../lib/graphql/queries/getProductDetail';

export async function getStaticPaths() {
	const { products } = await graphql.request(getAllProducts);

	const paths = products.map((product) => ({
		params: { slug: product.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { products } = await graphql.request(getProductDetail, {
		slug: params.slug,
	});

	return {
		props: {
			product: products[0],
		},
	};
}

export default function ProductPage({ product }) {
	return <div>{product.name}</div>;
}
