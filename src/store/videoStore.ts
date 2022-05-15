import create from "zustand";
import { fetcher } from "../lib/fetcher";
import { Video, VideoStoreState } from "../lib/types";

const videoStore = create<VideoStoreState>((set) => {
  return {
    videoCamera: "",
    videoScreen: "",
    isPlaying: false,
    currentTime: 0,
    videoDuration: 0,
    volume: 100,
    isSliding: false,
    sliderValue: 0,
    getVideosForTesterAndSetState: async (id: Number) => {
      const response = await fetcher("tester/" + id);
      const videos = response.data.KPI.video;

      const videoCamera = videos.find(
        (video: Video) => video.type === "camera"
      ).url;
      const videoScreen = videos.find(
        (video: Video) => video.type === "screen"
      ).url;

      set({
        videoCamera,
        videoScreen,
      });
    },
    setIsSliding: (isSliding: boolean) =>
      set({
        isSliding,
      }),
    setSliderValue: (sliderValue: number) =>
      set({
        sliderValue,
      }),
    setVideoCamera: (videoUrl: string) =>
      set({
        videoCamera: videoUrl,
      }),
    setVideoScreen: (videoUrl: string) =>
      set({
        videoScreen: videoUrl,
      }),
    setIsPlaying: (isPlaying: boolean) =>
      set({
        isPlaying,
      }),
    setCurrentTime: (currentTime: number) =>
      set({
        currentTime,
      }),
    setVideoDuration: (videoDuration: number) =>
      set({
        videoDuration,
      }),
    setVolume: (volume: number) =>
      set({
        volume,
      }),
  };
});

export default videoStore;
