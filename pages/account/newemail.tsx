import { useCustomRouter } from "components/hooks/custom-router";
// import router from "next/router";
import NewEmail from "public/assets/icons/NewEmail";
import React from "react";

const NewEmailPage = () => {
  const { goToLogin } = useCustomRouter();
  // const email = router?.query?.email as string;
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full">
      <div className="w-[457px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="p-6 bg-[#E2EEED] rounded-full">
          <NewEmail width={24} height={24} />
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-[22px] not-italic font-medium leading-[22px] text-center">
            A new email has landed in your inbox
          </div>
          <div className="text-center text-[#54716F] text-base not-italic font-normal mt-3">
            Instructions have been sent to
          </div>
          <div className="text-center text-[#2F4644] text-base not-italic font-normal">
            {/* {email} */}John@gmail.com
          </div>
        </div>
        <div
          className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer"
          onClick={() => goToLogin()}
        >
          Back to Log in
        </div>
      </div>
    </div>
  );
};

export default NewEmailPage;
