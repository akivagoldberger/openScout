import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Flex, Divider, SimpleGrid } from "@chakra-ui/core";

import { OnePagerData } from "../model/model";
import { getOnePagerData } from "../data/dataService";
import { EMPTY_ONE_PAGER } from "../data/onepagers";
import { ContentCard } from "./ContentCard";
import { Header } from "./Header";
import { OnePagerOverview } from "./OnePagerOverview";
import { OnePagerFounders } from "./OnePagerFounders";
import { OnePagerFinances } from "./OnePagerFinances";
import { OnePagerVideo } from "./OnePagerVideo";

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  // Load data on first render.
  React.useEffect(() => {
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box bg="#f2f4f5" align="center" justifyContent="center">
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Flex flexDirection="column" justify="space-between">
          <OnePagerOverview onePagerData={onePagerData} isLoading={isLoading} />

          <OnePagerFounders onePagerData={onePagerData} isLoading={isLoading} />

          <OnePagerVideo onePagerData={onePagerData} isLoading={isLoading} />
        </Flex>
        <Flex textAlign="center" justify="space-between">
          <OnePagerFinances onePagerData={onePagerData} isLoading={isLoading} />
        </Flex>
      </SimpleGrid>

      <ContentCard isLoading={false}>
        <Flex justifyContent="center">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </Flex>
      </ContentCard>
      <Box h="20"></Box>
    </Box>
  );
};

const Diveder50 = () => <Divider width="50%" />;
