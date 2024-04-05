import { HStack, Text } from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";

const HomeTitle = ({ keycloakInfo }) => {
  const { t } = useTranslate();
  return (
    <HStack
      display="block"
      width="100%"
      padding="15px 30px"
      maxWidth="3000px"
      fontWeight="500"
      fontSize="2xl"
      color="aliceblue"
      whiteSpace="nowrap"
    >
      <Text
        fontSize={{
          base: "xl",
          sm: "3xl",
          md: "5xl",
          xl: "5xl",
        }}
      >
        {t("dashboard").toUpperCase()}
      </Text>
      <Text>Welcome {keycloakInfo.name}</Text>
    </HStack>
  );
};

export default HomeTitle;
