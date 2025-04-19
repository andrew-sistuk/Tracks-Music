import { Button } from '@/components/ui/button';

import css from './PageNotFound.module.css';

export function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="text-muted-foreground mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Button onClick={() => window.location.href = '/'}>Go Home</Button>
    </div>
  );
}