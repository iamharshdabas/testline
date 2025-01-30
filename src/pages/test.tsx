import { Spinner } from "@heroui/spinner";

import Test from "@/components/text";
import { text } from "@/config/primitives";
import { useGetTest } from "@/hooks/get/test";

export default function TestPage() {
  const { data, isLoading, isError, error } = useGetTest();

  if (isLoading) {
    return (
      <div className="grid place-items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center">
        <h1 className={text({ size: "sm", color: "pink" })}>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      {data ? (
        <Test questions={data.questions} />
      ) : (
        <h1 className={text({ size: "sm", color: "pink" })}>
          Something went wrong!
        </h1>
      )}
    </div>
  );
}
