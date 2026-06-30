import { useState } from "react";
import { ExternalLink } from "lucide-react";

type FlipCardData = {
  name: string;
  image: string;
  bio: string;
  url: string;
};

export function FlipCard({ data }: { data: FlipCardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-full min-h-[22rem] w-full cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative h-full w-full rounded-[1.75rem] border border-border bg-background shadow-sm transition-transform duration-500 ease-in-out ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-[1.75rem] p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Live project
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {data.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {data.bio}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Tap the card to flip and open the site.
              </p>
            </div>
          </div>
        </div>

        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 rounded-[1.75rem] bg-foreground/5 p-6 text-left transition-opacity duration-300 hover:bg-foreground/10"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={data.image}
                  alt={`${data.name} logo`}
                  className="h-16 w-16 rounded-2xl object-cover border border-border"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Open site
                  </p>
                  <h4 className="text-lg font-semibold text-foreground">
                    {data.name}
                  </h4>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Tap to open the project in a new tab.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-background/90 p-4 border border-border">
              <span className="text-sm text-muted-foreground truncate">{data.url}</span>
              <ExternalLink className="h-4 w-4 text-foreground" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
