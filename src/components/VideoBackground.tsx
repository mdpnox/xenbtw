export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/serious.mp4" type="video/mp4" />
      </video>

      {/* Lớp phủ tối để chữ dễ đọc */}
      <div className="fixed inset-0 -z-10 bg-black/50" />
    </>
  );
}