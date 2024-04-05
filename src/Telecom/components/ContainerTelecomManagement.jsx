import { lazy, Suspense, memo, useMemo } from "react";

import { HStack } from "@chakra-ui/react";
import { telecomMenu } from "SharedElements/constants/allMenuTable.js";
import { useTelecomPageStore } from "store/TelecomStore/TelecomPageStore.jsx";

import Container from "SharedElements/components/LayoutContainer/Container.jsx";
const TableBodyContainer = lazy(() =>
  import(
    "SharedElements/components/LayoutContainer/TableLayout/TableBodyContainer.jsx"
  )
);
import TableHeaderContainer from "SharedElements/components/LayoutContainer/TableLayout/TableHeaderContainer.jsx";
import { SmoothComponent } from "SharedElements/components/AnimationComponent.jsx";

const ContainerTelecomManagement = ({ path, onOpen }) => {
  const { getTelecomRows } = useTelecomPageStore();
  const memoizedData = useMemo(() => getTelecomRows, [getTelecomRows]);

  return (
    <SmoothComponent>
      <HStack>
        <Container
          path={path.substring(9, path.length)}
          dataToLoad={memoizedData}
          menuTable={telecomMenu}
          table_name={"Telecom"}
          onOpen={onOpen}
        >
          <TableHeaderContainer />
          <Suspense>
            <TableBodyContainer
              dataRows={memoizedData}
              path={path}
              table_name={"telecom"}
            />
          </Suspense>
        </Container>
      </HStack>
    </SmoothComponent>
  );
};

export default memo(ContainerTelecomManagement);
