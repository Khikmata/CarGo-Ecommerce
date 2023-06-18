import { Button } from '@/shared';
import magnifyingGlassIcon from '@images/magnifying-glass.svg';

interface SearchButtonProps {
  overlayStyles: string;
  //  handleClick: () => void;
}

export const SearchButton = ({ overlayStyles }: SearchButtonProps) => {
  return (
    <Button
      imageSrc={magnifyingGlassIcon}
      imageSize={40}
      direction="titleFirst"
      type="submit"
      classStyles={`-ml-3 z-10 ${overlayStyles && overlayStyles}`}
    />
  );
};
