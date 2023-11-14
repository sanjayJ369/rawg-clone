import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsList from "./PlatformsList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <CardBody borderRadius="10px">
        <Image
          src={game.background_image}
          overflow="hidden"
          borderRadius="10px"
        ></Image>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformsList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformsList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
