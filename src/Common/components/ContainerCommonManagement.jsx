import { lazy, Suspense, memo, useMemo } from "react";

import { HStack } from "@chakra-ui/react";
import { commonMenu } from "SharedElements/constants/allMenuTable.js";
import { useAdminPageStore } from "store/CommonStore/AdminPageStore.jsx";

const TableBodyContainer = lazy(() =>
  import(
    "SharedElements/components/LayoutContainer/TableLayout/TableBodyContainer.jsx"
  )
);
import Container from "SharedElements/components/LayoutContainer/Container.jsx";
import TableHeaderContainer from "SharedElements/components/LayoutContainer/TableLayout/TableHeaderContainer.jsx";
import { SmoothComponent } from "SharedElements/components/AnimationComponent.jsx";

const ContainerCommonManagement = ({ path, onOpen }) => {
  const { getDataRows } = useAdminPageStore();
  const memoizedData = useMemo(() => getDataRows, [getDataRows]);

  return (
    <SmoothComponent>
      <HStack>
        <Container
          path={path}
          dataToLoad={memoizedData}
          menuTable={commonMenu}
          table_name={"Common"}
          onOpen={onOpen}
        >
          <TableHeaderContainer />
          <Suspense>
            <TableBodyContainer
              path={path}
              dataRows={memoizedData}
              table_name={"common"}
            />
          </Suspense>
        </Container>
      </HStack>
    </SmoothComponent>
  );
};

export default memo(ContainerCommonManagement);
