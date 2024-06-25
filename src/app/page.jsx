import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-green-500" >
      <div className=" flex flex-col-reverse md:flex-row h-full ">
          <div className="bg-green-500 w-full h-full flex justify-center">
            <div className="h-full flex justify-center items-center flex-col px-6 w-full md:w-full xl:w-2/3 2xl:w-2/5 gap-8" >
              <p className="text-3xl text-white text-left w-full mb-6">Sign in</p>
                <input
                  className="border-2  w-full p-3 bg-white rounded-xl"
                  type="text"
                  placeholder="Username"
                  required
                
                />
                <button className="text-white w-full p-3 bg-success rounded-xl">Sign In</button>
            </div>
          </div>

          <div className="bg-green-300 rounded-b-[2rem] md:rounded-l-[2rem] w-full h-full">
              <p>
                test abord
              </p>
          </div>
      </div>

      {/* <div className="text-center">
        <div className="w-full grid justify-items-end">
          <a className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-5/12 h-full">
            a Board
          </a>
        </div>

        
        <div>
          <input
            className="border-2 my-8"
            type="text"
            placeholder="insert dei"
            required
          />
        </div>
        <div>
          <button className="border-2"> Click !</button>
        </div>
      </div> */}
    </main>
  );
}
