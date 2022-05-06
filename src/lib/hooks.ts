import useSWR from "swr";
import fetcher from "../api/fetcher";

export const useTasks = () => {
  const { data, error } = useSWR("tasks", fetcher, { refreshInterval: 1000 });

  return {
    tasks: data,
    isLoading: !error && !data,
    isError: error,
  };
};
