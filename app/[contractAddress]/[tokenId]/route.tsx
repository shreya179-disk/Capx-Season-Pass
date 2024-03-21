import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const [_, contractAddress, tokenId] = pathname.split("/")

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: "flex", zIndex:"auto", fontSize:"500px" }} className="font-satoshi text-[100%] xs:text-[18px] md:text-[20px] lg:text-[400px] xl:text-[32px] mt-[57.5%] sm:mt-40 md:mt-18 lg:mt-20 xl:mt-[327px] ml-[65%] sm:ml-[20px] xl:ml-[420px]">
        {`${"0".repeat(6 - tokenId.length)}${tokenId}`}
       </div>
        <img
        width={1200}
        height={630}
          src={`https://firebasestorage.googleapis.com/v0/b/capx-x-web3auth.appspot.com/o/app_data%2Fprelaunch%2FALPHA-STICKER.png?alt=media&token=f2eeb94a-109b-40c6-83eb-2a9a6becba11`}
        />
      </div>
      // <div
      //   style={{
      //     display: "flex",
      //     flexDirection: "column",
      //     justifyContent: "center",
      //     alignItems: "center"
      //   }}
      // >
      //   <div style={{ display: "flex" }} className="h-screen w-screen">
      //     <div style={{ display: "flex" }} className="max-w-screen relative mx-auto aspect-square max-h-screen overflow-hidden bg-white">
      //       <div style={{ display: "flex" }} className="relative h-full w-full">
      //         <div style={{ display: "flex" }} className="max-h-1080[px] relative h-full w-full max-w-[1080px]">
      //           <div style={{ display: "flex" }} className={`bg-black h-full w-full grid grid-cols-1 grid-rows-1 transition`}>
      //           {/* <img
      //     width="256"
      //     height="256"
      //     src={`https://firebasestorage.googleapis.com/v0/b/capx-x-web3auth.appspot.com/o/app_data%2Fprelaunch%2FALPHA-STICKER.png?alt=media&token=f2eeb94a-109b-40c6-83eb-2a9a6becba11`}
      //     style={{
      //       borderRadius: 128,
      //     }}
      //   /> */}
      //             <div style={{ display: "flex", backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/capx-x-web3auth.appspot.com/o/app_data%2Fprelaunch%2FALPHA-STICKER.png?alt=media&token=f2eeb94a-109b-40c6-83eb-2a9a6becba11")` }} className={`mx-10 bg-center bg-contain bg-no-repeat`}>
      //               <div style={{ display: "flex" }} className="font-satoshi text-[100%] xs:text-[18px] md:text-[20px] lg:text-[400px] xl:text-[32px] mt-[57.5%] sm:mt-40 md:mt-18 lg:mt-20 xl:mt-[327px] ml-[65%] sm:ml-[20px] xl:ml-[420px]">
      //                 {`${"0".repeat(6 - tokenId.length)}${tokenId}`}
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}