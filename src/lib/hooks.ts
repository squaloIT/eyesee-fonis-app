import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useTasks = () => {
  // react-query - procitati malo vise
  const { data, error } = useSWR("tasks", fetcher);

  return {
    tasks: data,
    error,
    isLoading: !data && !error,
  };
};
