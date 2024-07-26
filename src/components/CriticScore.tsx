import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 79 ? "green" : score > 59 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
