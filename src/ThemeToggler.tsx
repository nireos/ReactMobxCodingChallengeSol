import { useColorMode, Box, IconButton } from "@chakra-ui/core";

const  ThemeToggler = ()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        aria-label="s"
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
export default ThemeToggler;