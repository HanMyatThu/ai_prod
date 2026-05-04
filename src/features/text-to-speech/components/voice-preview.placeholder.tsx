import { AudioLines, BookOpen, Sparkles, Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function VoicePreviewPlaceholder() {
  return (
    <div className="hidden flex-1 lg:flex h-full flex-col items-center justify-center gap-6 border-t">
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex w-32 items-center justify-center">
          <div className="absolute left-0 -rotate-30 rounded-full bg-muted p-4">
            <Volume2 className="text-muted-foreground size-5" />
          </div>

          <div className="relative z-10 rounded-full bg-foreground p-4">
            <Sparkles className="text-background size-5" />
          </div>

          <div className="absolute right-0 -rotate-30 rounded-full bg-muted p-4">
            <AudioLines className="text-muted-foreground size-5" />
          </div>
        </div>

        <p className="text-lg font-semibold tracking-tight text-foreground">
          Preview will appear here
        </p>

        <p className="max-w-64 text-sm text-muted-foreground">
          Once you generate, your audio result will appear here. Sit back and
          relax.
        </p>
      </div>
      <Button variant="outline" size="sm">
        <BookOpen />
        Dont&apos;t know how?
      </Button>
    </div>
  );
}
