import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((genre) => (
        <li key={genre.id}>
          <HStack paddingY={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </li>
      ))}
    </List>
  );
};

export default GenreList;
