import create from "zustand";
import { devtools } from "zustand/middleware";
import { TaskStoreState } from "../lib/types";

const useTaskStore = create(
  devtools<TaskStoreState>((set: any) => ({
    taskName: "",
    testerName: "",
    kpiID: 0,
    setKPIID: (id: number) => set({ kpiID: id }),
    setTaskName: (taskName) => set({ taskName }),
    setTesterName: (testerName) => set({ testerName }),
  }))
);

export default useTaskStore;
