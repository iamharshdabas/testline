import { useQuery } from "@tanstack/react-query";

import { getTest } from "@/api/get/test";

export function useGetTest() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTest,
  });
}
