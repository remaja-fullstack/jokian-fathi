import React from "react";

const Sertifikat = () => {
    return(
        <body>
            <div className=" bg-[#627EFD] w-full  flex flex-row flex-wrap">
                <div className="w-[466px] mt-[137px] mx-auto">
                    <h2 className="font-montserrat text-white text-5xl mx-20 mb-20 font-semibold">Contact Us</h2>
                    <div className="mb-28">
                        <img src="/assets/Twitter.svg" className="float-left w-[85px] h=[65px] mr-9 " alt = "Twitter"></img>
                    <p className="font-montserrat text-white text-5xl font-semibold">RumpunIlmu</p>    
                    </div>
                    <div className="mb-28">
                    <img src="/assets/Instagram.svg" className="float-left w-[85px] h=[85px] mr-9 " alt = "Instagram"></img>
                        <p className="font-montserrat text-white text-5xl font-semibold">RumpunIlmu</p>    
                    </div>
                    <div className="mb-28">
                    <img src="/assets/whatsapp.svg" className="float-left w-[85px] h=[85px] mr-9 " alt = "Whatsapp"></img>
                        <p className="font-montserrat text-white text-5xl font-semibold">081290182005</p>    
                    </div>
                </div> 

                <div className="basis-[579px] h-[679px] mx-auto mt-[114px] bg-white rounded-xl border-2 shadow-lg border-black mb-20">
                    <h2 className="font-montserrat text-5xl font-semibold text-center mt-[31px] mb-[34px]">Meet Our Team</h2>
                    <div className="w-[524px] h-1 mx-auto item-center mb-10  rounded-xl border-4 border-black"></div>
                    <div className="mx-auto grid grid-rows-2 grid-cols-2 gap-y-12 ">
                <div>
                    <img className="mx-auto" src="../assets/fathi-desktop.png"></img>
                    <p className="mt-[10px] text-center text-lg font-lato">Fathi</p>
                </div>
                <div>
                    <img className="mx-auto" src="../assets/abiyyu-desktop.png"></img>
                    <p className="mt-[10px] text-center text-lg">Abiyyu</p>
                </div>
                <div>
                     <img className="mx-auto" src="../assets/tanzil-desktop.png"></img>
                     <p className="mt-[10px] text-center text-lg">Tanzil</p>
                </div>
                <div>
      <img className="mx-auto" src="../assets/mirel-desktop.png"></img>
      <p className="mt-[10px] text-center text-lg">Mirel</p>
  </div>
</div>
                </div>
            </div>
        </body>
    )
}
export default Sertifikat