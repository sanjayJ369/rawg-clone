import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem paddingX="10px" area="aside">
            <GenresList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            ></GenresList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GamesGrid selectedGenre={selectedGenre}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
