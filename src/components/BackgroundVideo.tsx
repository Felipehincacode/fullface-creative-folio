const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale blur-md opacity-40"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
    </div>
  );
};

export default BackgroundVideo;
