import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets, songsData, albumsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData[id]; 

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={album.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b> ● 1,321,232 likes ● <b>50 songs,</b> about 2 hr 30
            min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white flex items-center gap-2">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="w-10 h-10 rounded" src={item.image} alt="" />
            {item.name} 
          </p>
          <p>{item.album}</p>
         
          <p className="text-[15px]">{albumsData.name}</p>
          <p className="text-[15px] hideen sm:block">5 days ago</p>
          <p className="text-[15px] text-center" >{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
