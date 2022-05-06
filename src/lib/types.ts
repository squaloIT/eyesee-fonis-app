export type KPI = {
  id: Number;
  emotion: string;
  testerId: number;
  createdAt: String;
  updatedAt: String;
};

export type Tester = {
  id: number;
  tester_id: String;
  name: String;
  createdAt: String;
  updatedAt: String;
  KPI: KPI;
};

export type Task = {
  id: number;
  name: String;
  tester: Tester[];
};

export type VideoStoreState = {
  isPlaying: boolean;
  videoScreen: string;
  videoCamera: string;
  volume: number;
  videoDuration: number;
  currentTime: number;
  isSliding: boolean;
  sliderValue: number;
  getVideosForTesterAndSetState: (id: Number) => void;
  setVolume: (volume: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVideoDuration: (videoDuration: number) => void;
  setCurrentTime: (currentTime: number) => void;
  setSliderValue: (sliderValue: number) => void;
  setIsSliding: (isSliding: boolean) => void;
};

export type Video = {
  id: number;
  type: string;
  url: string;
  updatedAt: string;
  createdAt: string;
};

export interface VideoBoxInterface {
  src: string;
  type: "camera" | "screen";
}

export type TaskStoreState = {
  taskName: string;
  kpiID: number;
  testerName: string;
  setTaskName: (taskName: string) => void;
  setTesterName: (testerName: string) => void;
  setKPIID: (id: number) => void;
};
