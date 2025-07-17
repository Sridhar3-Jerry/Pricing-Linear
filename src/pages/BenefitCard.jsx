import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

function BenefitCard({h1,h1class,subheading,className}){
   
    return(
        
        <div className={className}>

                {h1 && (
                    <div className="border-b border-gray-700 p-5">
                        <h1 className={`text-2xl ${
                                    h1class
                                        ? (h1.available ? 'text-gray-200' : h1class)
                                        : (h1.available ? 'text-white ' : 'text-black')
                                    }`}>
                        {h1.name}
                        </h1>
                    </div>
                )}
                <div className="flex flex-col">
                   {subheading && subheading.map((item,index)=>{
                        return(
                            <div key={index} className={`flex items-center gap-2 text-sm/6 font-light border-b border-gray-700 p-3  ${item.available ? 'text-white' : 'text-gray-500'}`}>
                            
                                {item.available ? (
                                    <CheckCircleIcon className="h-4 w-5 text-togglebtn" />
                                ) : (
                                    <XCircleIcon className="h-4 w-5 text-gray-500" />
                                )}
                                <div className='w-2/3'><span>{item.name}</span></div>                                
                            </div>
                        )
                   })}
                      
                </div>
                
           
        </div>
    )
}
export default BenefitCard;