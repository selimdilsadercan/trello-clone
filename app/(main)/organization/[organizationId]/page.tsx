import { Suspense } from "react";

async function Page() {
  // const isPro = await checkSubscription();

  return (
    <div className="w-full mb-20">
      {/* <Info isPro={isPro} />
      <Separator className="my-4" /> */}
      <div className="px-2 md:px-4">
        {/* <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense> */}
      </div>
    </div>
  );
}

export default Page;
