import { lazy, Suspense, memo, useMemo } from "react";

import { HStack } from "@chakra-ui/react";
import { templateMenu } from "SharedElements/constants/allMenuTable.js";
import { useTemplatePageStore } from "store/TemplateStore/TemplatePageStore.jsx";

import Container from "SharedElements/components/LayoutContainer/Container.jsx";
import TableHeaderContainer from "SharedElements/components/LayoutContainer/TableLayout/TableHeaderContainer.jsx";
const TableBodyContainer = lazy(() =>
  import(
    "SharedElements/components/LayoutContainer/TableLayout/TableBodyContainer.jsx"
  )
);
import { SmoothComponent } from "SharedElements/components/AnimationComponent.jsx";

const ContainerTemplateManagement = ({ path, onOpen }) => {
  const { getTemplateRows } = useTemplatePageStore();
  const memoizedData = useMemo(() => getTemplateRows, [getTemplateRows]);

  return (
    <SmoothComponent>
      <HStack>
        <Container
          path={path.substring(10, path.length)}
          dataToLoad={memoizedData}
          menuTable={templateMenu}
          table_name={"Template"}
          onOpen={onOpen}
        >
          <TableHeaderContainer />
          <Suspense>
            <TableBodyContainer
              path={path}
              dataRows={memoizedData}
              table_name={"template"}
            />
          </Suspense>
        </Container>
      </HStack>
    </SmoothComponent>
  );
};

export default memo(ContainerTemplateManagement);
