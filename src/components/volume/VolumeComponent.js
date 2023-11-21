"use client";
import React from "react";

const mp3Location = "C:/Users/Asus/Downloads/Music/";

export default function VolumeComponent() {
  const audioRef = React.useRef(null);
  const [volume, setVolume] = React.useState(0.5);
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };
  // Use useEffect to update the volume after component has mounted
  React.useEffect(() => {
    const audioElement = document.getElementById("myAudio");
    if (audioElement) {
      audioElement.volume = volume;
    }
    console.log(audioElement?.volume)
  }, [volume]);

  return (
    <div className="flex flex-col gap-2 p-2">
      <audio id="myAdudio" controls>
        <source src={"/music/ដើមត្នោត.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}
