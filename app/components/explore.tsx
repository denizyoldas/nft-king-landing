import React from 'react'
import Button from './UI/button'

const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
      <div>
        <div className="font-bold text-6xl">
          Discover & Collect{' '}
          <span className="bg-gradient-to-r from-title-yellow-300 to-title-yellow-500 bg-clip-text">
            Super Rare
          </span>{' '}
          Digital Artworks
        </div>
        The largest NFT marketplace. Authentic and truly unique digital
        creation. Signed and issued by the creator, made possible by blockchain
        technology
        <div>
          <Button>Let’s Explore</Button>
          <Button variant="outline">Sell NFT</Button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img src="/images/explore.png" alt="explore" />
        <div className="w-full absolute grid grid-cols-3 bottom-10 h-32 border border-white items-center backdrop-blur-md text-center font-bold text-lg rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/metamask-icon.png"
              className="h-9"
              alt="meta mask wallet"
            />
            MetaMask
          </div>
          <div>ICON Binance</div>
          <div>ICON Coinbase</div>
        </div>
      </div>
    </div>
  )
}

export default Explore

// import React from 'react'
// import Button from './UI/button'

// const Explore = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
//       <div>
//         <div className="font-bold text-6xl">
//           Discover & Collect{' '}
//           <span className="bg-gradient-to-r from-title-yellow-300 to-title-yellow-500 bg-clip-text">
//             Super Rare
//           </span>{' '}
//           Digital Artworks
//         </div>
//         The largest NFT marketplace. Authentic and truly unique digital
//         creation. Signed and issued by the creator, made possible by blockchain
//         technology
//         <div>
//           <Button>Let’s Explore</Button>
//           <Button variant="outline">Sell NFT</Button>
//         </div>
//       </div>
//       <div className="relative flex justify-center items-end h-[450px]">
//         {/* <img
//           src="/images/explore1.png"
//           alt="explore"
//           className="absolute top-0 left-0 z-20"
//         />
//         <img
//           src="/images/explore2.png"
//           alt="explore"
//           className="absolute left-0 top-0 z-10 hover:z-20 translate-y-[-30px]"
//         />
//         <img
//           src="/images/explore3.png"
//           alt="explore"
//           className="absolute top-0 left-0 hover:z-20 translate-y-[-30px]"
//         /> */}
//         <div className="w-full absolute grid grid-cols-3 bottom-10 h-32 border border-white items-center backdrop-blur-md text-center font-bold text-lg rounded-lg z-30">
//           <div className="flex items-center justify-center gap-2">
//             <img
//               src="/images/metamask-icon.png"
//               className="h-9"
//               alt="meta mask wallet"
//             />
//             MetaMask
//           </div>
//           <div>ICON Binance</div>
//           <div>ICON Coinbase</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Explore
