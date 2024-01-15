import Link from 'next/link';
import { Box, Text, Image, Divider } from '@chakra-ui/react';

export default function ProductCard({ product }) {
	return (
		<Link href={`/product/${product.slug}`}>
			<Box
				border="1px"
				rounded="lg"
				borderColor="gray.200"
				py="5"
				px="10"
				height="100%"
				transition="ease 0.2s"
				_hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }}
			>
				<Image
					src={product.images[0]?.url}
					alt={product.name}
					// layout="responsive"
					// objectFit="cover"
				/>
				<Divider my="3" />
				<Text fontSize="lg" textColor="purple" fontWeight="bold">
					{product.name}
				</Text>
				<Text textColor="gray.700">${product.price / 100}</Text>
			</Box>
		</Link>
	);
}
