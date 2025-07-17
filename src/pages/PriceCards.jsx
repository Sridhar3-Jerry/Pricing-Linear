import { CheckCircleIcon } from '@heroicons/react/24/solid';
import ToggleSwitch  from './ToggleSwitch';

function PriceCards({h3,h5,p}){
    const plans = [
        {
          name: "Free",
          price: "$0",
          description: "Free for everyone",
          billing: "Always free",
          features: [
            "Unlimited members",
            "2 teams",
            "250 issues",
            "Slack and GitHub",
            "API access"
          ],
          button: "Get started",
        },
        {
          name: "Basic",
          price: "$8 per user/month",
          description: "Billed yearly",
          billing: "Billed yearly",
          features: [
            "All Free features +",
            "5 teams",
            "Unlimited issues",
            "Unlimited file uploads",
            "Admin roles"
          ],
          button: "Get started",
        },
        {
          name: "Business",
          price: "$14 per user/month",
          description: "Billed yearly",
          billing: "Billed yearly",
          features: [
            "All Basic features +",
            "Linear Asks",
            "Unlimited teams",
            "Private teams and guests",
            "Linear Insights",
            "Triage responsibility",
            "Zendesk and Intercom integrations"
          ],
          button: "Get started",
          extra: "or contact sales"
        },
        {
          name: "Enterprise",
          price: "Contact us",
          description: "Annual billing only",
          billing: "Annual billing only",
          features: [
            "All Business features +",
            "Advanced Linear Asks",
            "Issue SLAs",
            "SAML and SCIM",
            "Advanced security",
            "Migration and onboarding support"
          ],
          button: "Request trial",
          
        }
      ];

      const cardStyles = [
        "rounded-l-lg w-60 z-0 bg-black",      // Free
        "rounded-none w-60 z-0 bg-black",       // Basic
        "rounded-lg  z-10 scale-107 translate-y-3.5  bg-card",        // Business
        "rounded-r-lg w-60 z-0 bg-black"       
      ]
      

    return(
        <div className='bg-black flex justify-center '>
            {plans.map((plan,index)=>{
                return(
                    <div className={`  gap-4  border border-gray-800  ${cardStyles[index]}`}  key={index}>
                        <div className='text-white p-5 flex flex-col gap-2'>
                            <h3 className='text-3xl'>{plan.name}</h3>
                            <h5 className='text-lg font-extralight'>{plan.price}</h5>
                        </div>
                        <div className='border-b border-gray-600 border-t flex items-center gap-1 text-left p-5'>
                            {(plan.name === "Business" || plan.name === "Basic") && <ToggleSwitch />}
                            <p className='text-gray-500 font-light text-sm'>{plan.description}</p>
                        </div>
                        <div className='flex flex-col gap-3 mb-20 p-5'>
                            {plan.features.map((feature)=>{
                                    return(
                                        <div className='flex items-center gap-1'>
                                            <span><CheckCircleIcon className='w-6 h-4.5 text-indigo-500'/></span>
                                            <span className='text-gray-300 text-sm font-thin'>{feature}</span>
                                        </div>
                                    )
                            })}
                        </div>
                        <div className='flex flex-col items-center p-5  gap-2'>
                            <button className='text-white border border-gray-700 bg-btn cursor-pointer rounded-lg p-2 w-48 hover:bg-buttonHover' >Get Started</button>
                            <a href="" className='text-white'>{plan.extra}</a>
                        </div>
                        
                    </div>
                )
            })}
             
        </div>
        
       
        
    )
}

export default PriceCards