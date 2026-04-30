import { type YouTubeURL } from "@/utils/youtube";
import styles from "./youtube.module.scss";

export default function YouTubePlayer({
  title,
  url,
}: {
  title: string;
  url: YouTubeURL;
}) {
  return (
    <span className={styles.root}>
      <iframe
        width="560"
        height="315"
        src={
          url.playlistId
            ? `https://www.youtube.com/embed/videoseries?list=${url.playlistId}`
            : `https://www.youtube.com/embed/${url.videoId}${
                url.startTime ? "?start=" + url.startTime : ""
              }`
        }
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </span>
  );
}
