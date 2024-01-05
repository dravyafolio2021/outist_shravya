import { ActionFooter, Offerings } from '@/Components'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="-full flex flex-col justify-between gap-24 mt-16">
        <div className="">
            <Offerings />
            <div className="fixed w-full shadow-lg   flex-col justify-center items-center bottom-0 bg-[#f1f1f1] z-10">

            <ActionFooter className="" Back="Vendor" Next="Vendor2" />
            </div>
            {/* w-full  z-10 bottom-0 h- [57px]  py-[16px] bg-white flex-col justify-center items-center gap-2.5 inline-flex */}
        </div>
        <div className="">

        </div>
    </div>
      
    </>
  )
}

export default page;
