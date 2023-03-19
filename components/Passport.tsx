import React from 'react'

const Passport = () => {
  return (
    <>
    <div className="h-screen flex justify-center items-center gap-x-16">

      <div className="w-[15vw] h-[40vh] cursor-pointer bg-transparent group perspective">

        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">

          <div className="absolute backface-hidden w-full h-full bg-red-500 rounded-3xl">
          <div className="text-center flex flex-col items-center justify-center h-full text-white">
              <div>FRONT</div>
            </div>
          </div>

          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-200 rounded-3xl ">

            <div className="text-center flex flex-col items-center justify-center h-full text-black">
              <div>BACK</div>
            </div>

          </div>

        </div>

      </div>

    </div>
      
    </>
  )
}

export default Passport
