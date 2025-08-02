"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import PhotoGrid from '@/components/photo-grid';

const initialPhotos = [
  "https://placehold.co/500x500.png",
  "https://placehold.co/500x700.png",
  "https://placehold.co/700x500.png",
  "https://placehold.co/400x600.png",
  "https://placehold.co/600x400.png",
  "https://placehold.co/550x550.png",
  "https://placehold.co/450x650.png",
  "https://placehold.co/650x450.png",
];


export default function Home() {
  const [photos, setPhotos] = useState<string[]>(initialPhotos);

  const handleUpload = () => {
    const width = Math.floor(400 + Math.random() * 400);
    const height = Math.floor(400 + Math.random() * 400);
    const newPhoto = `https://placehold.co/${width}x${height}.png`;
    setPhotos(prevPhotos => [newPhoto, ...prevPhotos]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b pb-6">
          <h1 className="text-4xl lg:text-5xl font-headline text-primary font-bold">
            PhotoGrid
          </h1>
          <Button onClick={handleUpload} size="lg">
            <Upload className="mr-2 h-5 w-5" />
            Upload Photo
          </Button>
        </header>
        <PhotoGrid photos={photos} />
      </main>
      <footer className="text-center py-6 mt-8 bg-muted/50">
        <p className="text-sm text-muted-foreground">
            Designed for PhotoGrid.
        </p>
      </footer>
    </div>
  );
}
