import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </li>
      ))}
    </List>
  );
};

export default GenreList;
