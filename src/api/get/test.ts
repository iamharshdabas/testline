import { Test } from "@/types/test";

export async function getTest() {
  try {
    const response = await fetch(
      "https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Test = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching test data:", error.message);
      throw new Error(`Error fetching test data: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error");
    }
  }
}
