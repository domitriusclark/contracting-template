import { Flex, Text, Box } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import Link from '@components/Link'

export default function Navbar() {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text pl={3}>Community Solar</Text>
      </Flex>
      <Box>
        <ThemeTogglebutton />
        <Link m={4} href="/">
          Home
        </Link>
      </Box>
    </Flex>
  );
}
