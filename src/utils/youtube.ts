export type YouTubeURL = {
  videoId: string;
  playlistId?: string;
  startTime?: string;
};

export function parseYouTubeURL(url: string): YouTubeURL | undefined {
  if (!url) {
    return undefined;
  }

  try {
    const parsedURL = new URL(url);

    if (
      (parsedURL.hostname === "www.youtube.com" ||
        parsedURL.hostname === "www.youtube.com") &&
      (parsedURL.searchParams.get("v") != null ||
        parsedURL.searchParams.get("list") != null)
    ) {
      return {
        playlistId: parsedURL.searchParams.get("list") as string,
        videoId: parsedURL.searchParams.get("v") as string,
        startTime: parsedURL.searchParams.get("start") || undefined,
      };
    }

    if (parsedURL.hostname === "youtu.be" && parsedURL.pathname != null) {
      return {
        videoId: parsedURL.pathname.split("/").pop() as string,
        startTime: parsedURL.searchParams.get("t") || undefined,
      };
    }

    return undefined;
  } catch {
    return undefined;
  }
}
