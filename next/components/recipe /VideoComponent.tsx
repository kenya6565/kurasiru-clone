import React from "react";
interface VideoComponentProps {
  thumbnailUrl: string | undefined;
  source: string | undefined;
  type: string | undefined;
}

export const VideoComponent = ({
  thumbnailUrl,
  source,
  type,
}: VideoComponentProps) => {
  return (
    <video
      width="560"
      height="560"
      preload="auto"
      poster={thumbnailUrl}
      controls={true}
      controlsList="nodownload"
      muted={true}
      className="native"
      data-v-2932eb4e=""
    >
      <source src={source} type={type} data-v-049f9628="" />
      <p data-v-049f9628="">
        動画を再生するには、videoタグをサポートしたブラウザが必要です。
      </p>
    </video>
  );
};

export default VideoComponent;
