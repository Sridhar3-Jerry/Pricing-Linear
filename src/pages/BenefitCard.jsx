import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

function BenefitCard({h1,icon,subheading}){
   
    return(
        <div>
            <div className="text-white border-b border-white p-5">
                 <h1 className='text-2xl'>{h1}</h1>
            </div>
           
                <div className="flex flex-col">
                   {subheading && subheading.map((item,index)=>{
                        return(
                            <div key={index} className={`flex items-center gap-2 text-sm/6 font-light border-b p-3 ${item.available ? 'text-white' : 'text-gray-500'}`}>
                                {item.available ? (
                                    <CheckCircleIcon className="h-4 w-5 text-indigo-500" />
                                ) : (
                                    <XCircleIcon className="h-4 w-5 text-gray-500" />
                                )}
                                <span>{item.name}</span>
                            </div>
                        )
                   })}
                      
                </div>
           
        </div>
    )
}
export default BenefitCard;