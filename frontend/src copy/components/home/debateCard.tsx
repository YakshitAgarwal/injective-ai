// import Image from "next/image";
// import modi from "@/assets/modi.png";
// import trump from "@/assets/trump.png";
// import tate from "@/assets/tate.png";
// import musk from "@/assets/musk.png";
// import logo from "@/assets/logo.jpg";
// import { Users } from "lucide-react";
// import Link from "next/link";

// const LiveIndicator = () => (
//   <div className="absolute top-4 left-4 flex items-center gap-3">
//     <div className="flex items-center gap-2 bg-red-500 rounded-lg px-3 py-1.5">
//       <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
//       <span className="text-white text-sm font-medium">LIVE</span>
//     </div>
//     <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
//       <Users className="w-4 h-4 text-gray-700" />
//       <span className="text-gray-700 text-sm font-medium">1.9K</span>
//     </div>
//   </div>
// );

// const getImage = (character) => {
//   switch (character) {
//     case "Narendra Modi":
//       return modi;
//     case "Donald Trump":
//       return trump;
//     case "Andrew Tate":
//       return tate;
//     case "Elon Musk":
//       return musk;
//     default:
//       return logo;
//   }
// };

// export const DebateCard = ({ participants, topic, link }) => (
//   <Link href={link || " "}>
//     <div className="flex-shrink-0 w-[420px] group cursor-pointer">
//       <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200/80 shadow-lg">
//         <div className="aspect-[16/10] relative">
//           {/* Main Content Area */}
//           <div className="absolute inset-0 p-6">
//             <LiveIndicator />

//             {/* Debate Topic */}
//             <div className="absolute top-16 left-4 right-4 text-center">
//               <div className="bg-white/100 backdrop-blur-sm rounded-full py-2 shadow-sm border border-gray-200">
//                 <p className="text-gray-700 text-base font-medium truncate">
//                   {topic.toUpperCase()}
//                 </p>
//               </div>
//             </div>

//             {/* Versus Display */}
//             <div className="absolute inset-0 flex items-center justify-around mt-28">
//               {/* First Participant */}
//               <div className="text-center">
//                 <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 ring-4 ring-blue-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
//                   <Image
//                     src={getImage(participants[0])}
//                     alt={participants[0]}
//                   />
//                 </div>
//                 <p className="text-gray-700 font-bold text-lg">
//                   {participants[0]}
//                 </p>
//               </div>

//               {/* VS Badge */}
//               <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center animate-pulse shadow-lg">
//                 <span className="text-white font-bold text-lg">VS</span>
//               </div>

//               {/* Second Participant */}
//               <div className="text-center">
//                 <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 ring-4 ring-purple-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
//                   {/* <Brain className="w-12 h-12 text-purple-500" /> */}
//                   <Image
//                     src={getImage(participants[1])}
//                     alt={participants[1]}
//                   />
//                 </div>
//                 <p className="text-gray-700 font-bold text-lg">
//                   {participants[1]}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Hover Effect Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//       </div>

//       {/* Card Footer */}
//       <div className="mt-4 space-y-1 px-1">
//         <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
//           {topic.toUpperCase()}
//         </h3>
//         <p className="text-base text-gray-500">Tactical AI Debate • ESLCS</p>
//       </div>
//     </div>
//   </Link>
// );

import Image from "next/image";
import modi from "@/assets/modi.png";
import trump from "@/assets/trump.png";
import tate from "@/assets/tate.png";
import musk from "@/assets/musk.png";
import logo from "@/assets/logo.jpg";
import { Users } from "lucide-react";
import Link from "next/link";

const LiveIndicator = () => (
  <div className="absolute top-4 left-4 flex items-center gap-3">
    <div className="flex items-center gap-2 bg-purple-600 rounded-lg px-3 py-1.5">
      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
      <span className="text-white text-sm font-medium">LIVE</span>
    </div>
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
      <Users className="w-4 h-4 text-purple-700" />
      <span className="text-purple-700 text-sm font-medium">1.9K</span>
    </div>
  </div>
);

const getImage = (character) => {
  switch (character) {
    case "Narendra Modi":
      return modi;
    case "Donald Trump":
      return trump;
    case "Andrew Tate":
      return tate;
    case "Elon Musk":
      return musk;
    default:
      return logo;
  }
};

export const DebateCard = ({ participants, topic, link }) => (
  <Link href={link || " "}>
    <div className="flex-shrink-0 w-[420px] group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 border-2 border-purple-200/80 shadow-lg">
        <div className="aspect-[16/10] relative">
          {/* Main Content Area */}
          <div className="absolute inset-0 p-6">
            <LiveIndicator />

            {/* Debate Topic */}
            <div className="absolute top-16 left-4 right-4 text-center">
              <div className="bg-white/100 backdrop-blur-sm rounded-full py-2 shadow-sm border border-purple-200">
                <p className="text-purple-700 text-base font-medium truncate">
                  {topic.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Versus Display */}
            <div className="absolute inset-0 flex items-center justify-around mt-28">
              {/* First Participant */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 mx-auto mb-4 ring-4 ring-purple-300 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={getImage(participants[0])}
                    alt={participants[0]}
                  />
                </div>
                <p className="text-purple-800 font-bold text-lg">
                  {participants[0]}
                </p>
              </div>

              {/* VS Badge */}
              <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center animate-pulse shadow-lg">
                <span className="text-white font-bold text-lg">VS</span>
              </div>

              {/* Second Participant */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 mx-auto mb-4 ring-4 ring-indigo-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={getImage(participants[1])}
                    alt={participants[1]}
                  />
                </div>
                <p className="text-indigo-800 font-bold text-lg">
                  {participants[1]}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-4 space-y-1 px-1">
        <h3 className="text-xl font-semibold text-purple-800 group-hover:text-purple-600 transition-colors">
          {topic.toUpperCase()}
        </h3>
        <p className="text-base text-purple-500">Tactical AI Debate • ESLCS</p>
      </div>
    </div>
  </Link>
);