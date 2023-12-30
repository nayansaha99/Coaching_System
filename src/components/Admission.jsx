import React from "react";

const Admission = () => {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="text-green-600 text-sm lg:text-5xl font-bold">
                   Admisssion Requirment
                  </span>
                  <h2 className="mb-6 text-sm lg:text-3xl font-bold font-heading">

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.

                  
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                    
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:-ml-5">
                    <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-l-xl rounded-t-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                            <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                                <form action="">
                                    <div className="mb-6">
                                        <span className="text-sm text-gray-400">Sign Up</span>
                                        <h4 className="text-2xl">Create an account</h4>
                                    </div>
                                    <div className="mb-4 flex flex-wrap -mx-2">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                                            <input className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2">
                                            <input  className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <input  className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="hello@example.com"/>
                                    <textarea className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="Message"/>

                                    <button type={"submit"} className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
