
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[15%] px-24  text-white bg-gradient-to-r from-black w-screen aspect-video" >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg w-1/3">{overview}</p>

      <div>
        <button className="bg-red-600 text-white py-2 px-4 m-4 rounded">Play</button>
        <button className="bg-gray-300 text-black py-2 px-4 m-4 rounded">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
