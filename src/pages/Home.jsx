import React, { useEffect, useState } from "react";
import rasim from "../img/rasim.png"; // Tasvirni import qilishingiz kerak

function Home() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
    )
      .then((response) => response.json())
      .then((data) => setCryptoData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="bg-[#14161a] ">
      <div
        style={{
          backgroundImage:
            'url("https://pic.rutubelist.ru/userappearance/f0/8d/f08da36f8760cdc742fd6bbd2544cfb6.jpeg")',
          backgroundSize: "cover", // Tasvirni ekran o'lchamiga moslashtirish uchun
          backgroundPosition: "center", // Tasvirni markazlash
          height: "50vh", // Divning balandligi butun ekran bo'lishi uchun
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mt-[5vh] w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-[700] text-[60px] text-[#87CEEB]">
              CRYPTOFOLIO WATCH LIST
            </h1>
            <p className="text-[14px] font-[500] text-[#A9A9A9]">
              Get all the Info regarding your favorite Crypto Currency
            </p>
          </div>
          <div className="flex items-center justify-around w-full">
           { cryptoData.map((crypto, index) => {
            if(index<=3){
                return(

      <div className=" p-5 flex flex-col items-center">
         <img
           src={crypto.image}
           alt="crypto icon"
           className="w-[80px] h-[80px] mb-2 mx-auto"
         />
         <div className="text-center flex items-center">
           <p className="font-[400] text-[16px] text-[#fff]">{crypto.symbol.toUpperCase()}</p>
           <p className="font-[600] text-[16px] text-[#0ECB81]"><td
                        className={`py-2 px-4 flex items-center  ${
                            crypto.price_change_percentage_24h > 1
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {crypto.price_change_percentage_24h >1 ? "+" : "-"}
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td></p>
         </div>
         <div className="flex items-center gap-1">
           <svg
             width="9"
             height="14"
             viewBox="0 0 9 12"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M8.45039 2.96609L8.0515 4.40697H0.431931L0.830818 2.96609H8.45039ZM4.76271 11.88L0.668007 7.05265L0.659866 5.83971H2.60546C3.11018 5.83971 3.52534 5.75016 3.85097 5.57107C4.18202 5.38655 4.42895 5.13962 4.59176 4.83028C4.75457 4.51551 4.83598 4.16546 4.83598 3.78014C4.83598 3.36226 4.76 2.99322 4.60804 2.67303C4.45608 2.35283 4.21458 2.10319 3.88353 1.9241C3.55248 1.745 3.1156 1.65546 2.5729 1.65546H0.440071L0.879662 0.0273438H2.5729C3.53349 0.0273438 4.33126 0.17116 4.96622 0.458794C5.60119 0.746427 6.07605 1.16431 6.39082 1.71244C6.71102 2.26057 6.87112 2.92267 6.87112 3.69874C6.87112 4.37712 6.75444 4.97681 6.52107 5.4978C6.28771 6.01337 5.91053 6.43125 5.38953 6.75145C4.86854 7.06622 4.17659 7.26159 3.31369 7.33757L7.05835 11.7742V11.88H4.76271ZM8.45853 0.0273438L8.0515 1.46822H1.82397L2.22285 0.0273438H8.45853Z"
               fill="white"
             />
           </svg>
           <p className="font-[500] text-[21px] text-[#fff] text-center ">
           {crypto.market_cap.toLocaleString()}
           </p>
         </div>
       </div>
               )
       }
           })}
           
           
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <p className="text-[34px] font-[400] text-[#fff] py-3 text-center">
            Cryptocurrency Prices by Market Cap
          </p>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className=" h-[45px] mb-2 text-[#fff] px-3 w-full border-[#a7a6a6] border-[1px] border-solid bg-[#fff0] rounded-[4px]"
            />
            <div className="">
              <table className="min-w-full bg-[#16171A] text-white rounded-[5px]">
                <thead>
                  <tr className="w-full bg-blue-200 text-black div-2 rounded-t-[5px]">
                    <th className="py-2 px-4 text-left">Coin</th>
                    <th className="py-2 px-4 text-left">Price</th>
                    <th className="py-2 px-4 text-left">24h Change</th>
                    <th className="py-2 px-4  text-end">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <tr key={index} className="border-t border-[#515151] div-2 ">
                      <td className="py-2 px-4 flex items-center">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-8 h-8 mr-2"
                        />
                        <div>
                          <div className="font-bold">
                            {crypto.symbol.toUpperCase()}
                          </div>
                          <div className="text-sm text-gray-400">
                            {crypto.name}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        ${crypto.current_price.toLocaleString()}
                      </td>
                     
                      <td
                        className={`py-2 px-4 flex items-center gap-3 ${
                            crypto.price_change_percentage_24h > 1
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        <svg className="w-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                        {crypto.price_change_percentage_24h >1 ? "+" : "-"}
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="py-2 px-4 text-end">
                        ${crypto.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="font-[400] text-[14px] text-[#87CEEB] w-[400px] flex justify-between div-3">
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.84167 1.65498L5.66667 0.47998L0.666672 5.47998L5.66667 10.48L6.84167 9.30498L3.025 5.47998L6.84167 1.65498Z"
                      fill="#87CEEB"
                    />
                  </svg>
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  1
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  2
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  3
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  4
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  5
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  ...
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  10
                </button>
                <button className="w-[32px] h-[32px] rounded-[50px] hover:bg-[#ffffff51] ">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33334 0.47998L0.15834 1.65498L3.97501 5.47998L0.15834 9.30498L1.33334 10.48L6.33334 5.47998L1.33334 0.47998Z"
                      fill="#87CEEB"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
