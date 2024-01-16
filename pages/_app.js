// pages/_app.js
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import CartContext from '../lib/context/Cart';
import { useState } from 'react';
import NavBar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
	const [items, setItems] = useState({});

	return (
		<ChakraProvider>
			<CartContext.Provider value={{ items, setItems }}>
				<Flex w="full" minH="100vh" bgColor="gray.100">
					<NavBar />
					<Box maxW="70vw" mx="auto">
						<Component {...pageProps} />
					</Box>
				</Flex>
			</CartContext.Provider>
		</ChakraProvider>
	);
}

export default MyApp;
