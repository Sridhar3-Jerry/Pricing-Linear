import React, { useState } from "react";
import Marquee from "react-fast-marquee";

function Carosuel(){
    const [hovered, setHovered] = useState(false);
    const logos = [
        "https://www.drupal.org/files/vercel-logotype-dark.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png",
        "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/773abf09-47fc-466d-8da3-369bf62c120b.png",
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg",
        "https://cdn.freelogovectors.net/wp-content/uploads/2022/10/scale-logo-freelogovectors.net_.png",
        "https://fs.hubspotusercontent00.net/hubfs/7405301/email%20marketing/New%20Branded%20Logos/RemoteLogo_H_white.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Runway_Logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Retool_logo.svg/2560px-Retool_logo.svg.png",
        "https://www.kenility.com/sites/default/files/2024-10/LogosNotas-04.png"
      ];
        return(
            <div className="flex justify-center bg-black">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className="bg-black p-10 flex justify-center  py-16 mt-10">
                        <p className="text-gray-500 font-light text-sm">Powering the world's best product teams</p>
                    </div>
                    <div
                        className="relative bg-black p-2 shadow-2xl "
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Marquee pauseOnHover={false} speed={50} className="invert" >
                            {logos.map((src, i) => (
                                <img
                                key={i}
                                src={src}
                                alt={`image-${i}`}
                                className="h-7 mx-8 "
                                style={{ filter: hovered ? "blur(4px)" : "none", transition: "filter 0.3s" }}
                                />
                            ))}
                        </Marquee>
                        {hovered && (
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none ">
                                <div className="relative z-10">
                                    <button className="px-4 py-2 rounded-full bg-black/60 text-sm text-white border border-gray-600 shadow-lg backdrop-blur-md">
                                        Meet our customers &gt;
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
            
        )
}
export default Carosuel
