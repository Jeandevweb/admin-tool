import { Link } from "react-router-dom";

import { Box, Flex, Text } from "@chakra-ui/react";
import { FreeLogo } from "assets/Icons.jsx";

import { linkCard } from "SharedElements/constants/linkCard.js";
function HomeCard() {
  return (
    <Flex
      flexDirection={"row"}
      width="-webkit-fill-available"
      wrap={{
        base: "wrap",
        md: "wrap",
        xl: "nowrap",
      }}
      padding={{ base: "10px", sm: "10px", md: "10px" }}
      justifyContent="center"
      gap={{
        base: "15px",
        md: "15px",
        xl: "3%",
      }}
      alignContent="center"
      alignItems="center"
      h={{ base: "77%", md: "70%" }}
      overflow="auto"
    >
      {linkCard?.map((link, index) => (
        <Link to={link.link} key={`${link.link}-${index}`}>
          <Flex
            transition="all 0.3s ease-in-out"
            sx={{
              "&:hover": {
                bgColor: "#fdfdfd",
                transform: "scale(1.02)",
              },
            }}
            bg="rgba(255,255,255, 0.55)"
            h={{
              xl: "300px",
            }}
            direction="column"
            background="rgba(255, 255, 255, 1)"
            borderRadius="16px"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          >
            <Box p="20px 10px" mb="5px">
              <Flex w="100%" mb="10px">
                <FreeLogo
                  margin="10px 0"
                  height="30px"
                  width="110px"
                  color="red"
                />
              </Flex>
              <Box>
                <Text
                  fontWeight="600"
                  color={"gray.800"}
                  w="100%"
                  fontSize={{ base: "small", md: "medium", xl: "2xl" }}
                  marginLeft="16px"
                >
                  {link.text}
                </Text>
              </Box>
            </Box>
            <Flex
              bg="gray.100"
              w="100%"
              p="20px"
              borderBottomLeftRadius="inherit"
              borderBottomRightRadius="inherit"
              height="100%"
              direction="column"
              alignContent="center"
              alignItems="center"
            >
              <Text
                fontSize="sm"
                color="gray.500"
                lineHeight="24px"
                pe="40px"
                fontWeight="500"
                mb="auto"
                marginStart="8px"
                marginTop="20px"
              >
                {link.description}
              </Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
}

export default HomeCard;
