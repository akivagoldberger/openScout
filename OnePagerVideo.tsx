import React from "react";
import { Heading } from "@chakra-ui/core";

import { OnePagerData } from "../model/model";
import { ContentCard } from "./ContentCard";

type OnePagerVideoProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerVideo = ({
  onePagerData,
  isLoading,
}: OnePagerVideoProps) => {
  if (onePagerData.pitchVideoLink === undefined) return null;
  return (
    <ContentCard title="Pitch video" isLoading={isLoading}>
      <Heading as="h2" size="md" marginRight="10px">
        <a href={onePagerData.pitchVideoLink} target="_blank">
          Link to pitch video
        </a>
      </Heading>
    </ContentCard>
  );
};
