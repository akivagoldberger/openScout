import React from "react";
import {
  Heading,
  Box,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/core";

import { OnePagerData } from "../model/model";
import { ContentCard } from "./ContentCard";

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    if (financeNumber == undefined) return null;
    const numCommas = financeNumber
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return `$${numCommas}`;
  };

  let percentage =
    (onePagerData.fundsRaisedInStage / onePagerData.fundraisingStageGoal) * 100;

  return (
    <ContentCard title="Finances" isLoading={isLoading}>
      <Heading as="h1" size="xl" marginRight="10px">
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <Heading as="h3" size="sm">
        Details: {onePagerData.fundraisingDetails}
      </Heading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
      <CircularProgress
        color="green"
        size="300px"
        thickness={0.3}
        value={percentage}
      >
        <CircularProgressLabel>{percentage.toFixed(0)}%</CircularProgressLabel>
      </CircularProgress>
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as="h2" size="md" marginRight="10px">
    {children}
  </Heading>
);
