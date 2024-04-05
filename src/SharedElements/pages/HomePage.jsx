import { useContext } from "react";
import { useTranslate } from "@tolgee/react";

import { Box, VStack } from "@chakra-ui/react";

import { AuthContext } from "context/AuthContext.jsx";

import { SmoothComponent } from "SharedElements/components/AnimationComponent.jsx";
import HomeCard from "SharedElements/components/Home/HomeCard.jsx";
import HomeHeader from "SharedElements/components/Home/HomeHeader.jsx";
import HomeTitle from "SharedElements/components/Home/HomeTitle.jsx";
import HomeFooter from "SharedElements/components/Home/HomeFooter.jsx";

function GeneralLayout() {
  const { t } = useTranslate();

  const { keycloakInfo } = useContext(AuthContext);

  return (
    <SmoothComponent>
      <VStack
        backgroundImage="linear-gradient(to left, #8f94fb, #4e54c8)"
        height="100vh"
        margin="0 auto"
        overflow="hidden"
      >
        <HomeHeader />
        <HomeTitle keycloakInfo={keycloakInfo} />
        <HomeCard />
        <HomeFooter keycloakInfo={keycloakInfo} />
      </VStack>
    </SmoothComponent>
  );
}

export default GeneralLayout;
