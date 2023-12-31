import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 40 ? "yello" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
