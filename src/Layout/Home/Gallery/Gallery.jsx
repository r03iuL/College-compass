import PhotoAlbum from "react-photo-album";

const Gallery = () => {
  const photos = [
    { src: "/Gallery/1.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/2.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/3.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/4.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/5.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/6.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/7.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/8.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/9.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/10.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/11.jpg", width: 1920, height: 1280 },
    { src: "/Gallery/12.jpg", width: 1920, height: 1280 },
  ];
  return (
    <div className="mx-20 my-5 px-3">
      <h1 className="text-4xl font-bold my-5">Gallery </h1>
      <div>
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </div>
  );
};

export default Gallery;
