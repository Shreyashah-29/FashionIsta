import React from "react";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import Poster from "../../Components/Poster/Poster";
import YouTubePlayer from "../../Components/Video/Clothes"; // Adjust path as per your file structure

const HomePage = () => {
  const videoIds = [
    { id: "1gTvEIpl8K0", sectionName: "women" },
    { id: "lnTWVAyMHg0", sectionName: "beauty" },
    { id: "kkiJftHG3Wo", sectionName: "decor" },
  ];

  return (
    <>
      <div className="space-y-5 py-5 flex flex-col justify-center px-5 lg:px-10">
        <Poster />

        <div className="my-video-container">
        <h1 className="text-center m-3">Fashion & Style</h1>
          <YouTubePlayer videoId={videoIds.find((item) => item.sectionName === 'women').id} />
        </div>

        <HomeSectionCarousel SectionName="women" />

      
        <div className="my-video-container">
          <h1 className="text-center m-5 fw-bold">Beauty</h1>
          <YouTubePlayer videoId={videoIds.find((item) => item.sectionName === 'beauty').id} />
        </div>

        <HomeSectionCarousel SectionName="beauty" />

        <div className="my-video-container">
        <h1 className="text-center m-3">chic and Trendy</h1>
          <YouTubePlayer videoId={videoIds.find((item) => item.sectionName === 'decor').id} />
        </div>

        <HomeSectionCarousel SectionName="decor" />
      </div>
    </>
  );
};

export default HomePage;
