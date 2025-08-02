import PhotoCard from './photo-card';

type PhotoGridProps = {
  photos: string[];
};

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo, index) => (
        <PhotoCard key={`${photo}-${index}`} imageUrl={photo} />
      ))}
    </div>
  );
}
