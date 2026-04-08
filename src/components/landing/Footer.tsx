import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-primary">onfly</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Onfly · A maior travel tech da América Latina
        </p>
      </div>
    </footer>
  );
}
