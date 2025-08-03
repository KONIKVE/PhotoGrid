import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';

type PhotoCardProps = {
  imageUrl: string;
};

export default function PhotoCard({ imageUrl }: PhotoCardProps) {
  return (
    <Card className="group relative block w-full overflow-hidden rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl focus-within:shadow-xl">
      <img
        src={imageUrl}
        alt="Photo from gallery"
        width={500}
        height={500}
        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        data-ai-hint="gallery photo"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <a
          href={imageUrl}
          download
          className="focus:outline-none"
          aria-label="Download image"
        >
          <Button variant="secondary" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
        </a>
      </div>
    </Card>
  );
}
