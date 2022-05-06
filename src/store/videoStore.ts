import create from "zustand";
import { devtools } from "zustand/middleware";
import fetcher from "../api/fetcher";
import { Video, VideoStoreState } from "../lib/types";
import useTaskStore from "./taskStore";

const useVideoStore = create(
  devtools<VideoStoreState>((set: any, get: any) => ({
    isPlaying: false,
    videoScreen: "",
    videoCamera: "",
    videoDuration: 0,
    isSliding: false,
    currentTime: 0,
    sliderValue: 0,
    volume: 100,
    getVideosForTesterAndSetState: async (id: Number) => {
      const { setTaskName, setTesterName, setKPIID } = useTaskStore.getState();
      const { data } = await fetcher(`tester/${id}`);

      const videos = data.KPI.video;
      const videoCamera = videos.find(
        (video: Video) => video.type === "camera"
      ).url;
      const videoScreen = videos.find(
        (video: Video) => video.type === "screen"
      ).url;

      set({ videoScreen, videoCamera, isPlaying: false });
      setTaskName(data.task[0].name);
      setTesterName(data.name);
      setKPIID(data.KPI.id);
    },
    setVolume: (volume: number) => set({ volume }),
    setIsPlaying: (isPlaying: boolean) => {
      const { videoScreen, videoCamera } = get();
      if (videoScreen && videoCamera) {
        set({ isPlaying });
      }
    },
    setVideoDuration: (videoDuration: number) => set({ videoDuration }),
    setCurrentTime: (currentTime: number) => set({ currentTime }),
    setSliderValue: (sliderValue: number) => set({ sliderValue }),
    setIsSliding: (isSliding: boolean) => set({ isSliding }),
  }))
);

export default useVideoStore;
