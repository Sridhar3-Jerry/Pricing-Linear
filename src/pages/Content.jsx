function Content(){
    return(
        <div className="flex flex-col items-center py-20 bg-black mt-20">
            <div className="flex gap-2 justify-center border border-gray-800 rounded-full p-3 px-4 cursor-pointer hover:bg-buttonHover">
                <svg width="20" height="16" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 5.115h24c0 6.63-5.37 12-12 12s-12-5.37-12-12z" fill="url(#paint0_linear)"></path><path d="M24 5.115c0 1.658-1.117 3.488-4.058 3.488-2.564 0-5.452-1.778-7.942-3.488C14.64 3.293 17.543.893 19.942.893 22.395.885 24 3.128 24 5.115z" fill="url(#paint1_linear)"></path><path d="M0 5.115c0 1.657 1.117 3.487 4.058 3.487 2.564 0 5.452-1.777 7.942-3.487C9.36 3.292 6.457.885 4.058.885 1.605.885 0 3.127 0 5.115z" fill="url(#paint2_linear)"></path><defs><linearGradient id="paint0_linear" x1="12" y1="7.028" x2="12" y2="16.621" gradientUnits="userSpaceOnUse"><stop stop-color="#00D924"></stop><stop offset="1" stop-color="#00CB1B"></stop></linearGradient><linearGradient id="paint1_linear" x1="18" y1="1.028" x2="18" y2="9.567" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#009C00"></stop><stop offset="1" stop-color="#00BE20"></stop></linearGradient><linearGradient id="paint2_linear" x1="6" y1="9.938" x2="6" y2=".657" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE37D"></stop><stop offset="1" stop-color="#FFC900"></stop></linearGradient></defs></svg>
                <p className="text-sm text-gray-400 font-light">Linear contributes 1% of your subscription to remove CO₂ from the atmosphere through Stripe Climate</p>
            </div>
            <div className="flex justify-around w-1/2 px-20 mt-36">
                <div className="flex text-5xl">
                    <h1 className="text-white">Plan the present. Build the future.</h1>
                </div>
                <div className="flex gap-2">
                    <button className="bg-card px-3 rounded-lg cursor-pointer text-white/90 border border-gray-800 hover:bg-buttonHover">Talk to sales</button>
                    <button className="bg-white px-3 rounded-lg cursor-pointer">Get started</button>
                </div>
            </div>
        </div>
    )
}
export default Content