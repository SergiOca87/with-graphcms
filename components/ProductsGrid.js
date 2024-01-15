import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products }) {
	return (
		<Grid gridTemplateColumns="repeat(4, 1fr)" gap="5">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</Grid>
	);
}
