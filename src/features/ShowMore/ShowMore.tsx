'use client';

import { Button } from '@/shared';
import { UpdateSearchUrl } from '@/shared/utils/UpdateSearchUrl';
import { useRouter } from 'next/navigation';

interface ShowMoreProps {
  pageNumber: number;
  nextPage: boolean;
}

export const ShowMore = ({ pageNumber, nextPage }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = UpdateSearchUrl('limit', `${newLimit}`);
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {nextPage && (
        <Button
          title="Show More"
          type="button"
          classStyles="bg-primary-blue rounded-full text-white"
          eventClick={handleNavigation}
          direction="titleFirst"
          href="#discover"
        />
      )}
    </div>
  );
};
