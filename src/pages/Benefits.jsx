import { Features } from "tailwindcss";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import BenefitCard from "./BenefitCard";

function Benefits(){
  const plan1 = [
      {
        title: [{name:"Free",available:true}],
        features: [
          { name: "Unlimited members", available: true },
          { name: "10MB file uploads", available: true },
          { name: "250 issues", available: true },
          { name: "2 teams", available: true }
        ]
      },
      {
        title: [{name:"Features",available:true}],
        features: [
          { name: "Issues, projects, cycles, and initiatives", available: true },
          { name: "Customer requests", available: true },
          { name: "Integrations", available: true },
          { name: "API and webhook access", available: true },
          { name: "Import and export", available: true },
          { name: "Triage", available: true },
          { name: "Issue sync", available: true },
          { name: "Support integrations", available: false },
          { name: "Triage responsibility", available: false },
          { name: "Linear Asks", available: false },
          { name: "Issue SLAs", available: false }
        ]
      },
      {
        title: [{name:"Team management",available:true}],
        features: [
          { name: "Sub-teams", available: false },
          { name: "Private teams", available: false },
          { name: "Guest accounts", available: false }
        ]
      },
      {
        title: [{name:"Analytics & Reporting",available:true}],
        features: [
          { name: "Progress reports", available: true },
          { name: "Insights", available: false },
          { name: "Data warehouse sync", available: false }
        ]
      },
      {
        title: [{name:"Security",available:true}],
        features: [
          { name: "Google SSO", available: true },
          { name: "Admin roles", available: false },
          { name: "Advanced authentication", available: false },
          { name: "IP restrictions", available: false },
          { name: "SCIM provisioning", available: false },
          { name: "Domain claiming", available: false },
          { name: "Audit log", available: false },
          { name: "Third-party app management", available: false },
          { name: "HIPAA compliance", available: false }
        ]
      },
      {
        title: [{name:"Support",available:true}],
        features: [
          { name: "Priority support", available: false },
          { name: "Account manager", available: false },
          { name: "Custom terms", available: false },
          { name: "Uptime SLA", available: false }
        ]
      },
      
    
 ]; 
  const plan2=[
    {
      title: [{name:"Basic",available:true}],
      features: [
        { name: "Unlimited members", available: true },
        { name: "Unlimited file uploads", available: true },
        { name: "Unlimited issues", available: true },
        { name: "5 teams", available: true }
      ]
    },
    {
      title: [{name:"Features",available:false}],
      features: [
        { name: "Issues, projects, cycles, and initiatives", available: true },
        { name: "Customer requests", available: true },
        { name: "Integrations", available: true },
        { name: "API and webhook access", available: true },
        { name: "Import and export", available: true },
        { name: "Triage", available: true },
        { name: "Issue sync", available: true },
        { name: "Support integrations", available: false },
        { name: "Triage responsibility", available: false },
        { name: "Linear Asks", available: false },
        { name: "Issue SLAs", available: false }
      ]
    },
    {
      title: [{name:"Team management",available:false}],
      features: [
        { name: "Sub-teams", available: false },
        { name: "Private teams", available: false },
        { name: "Guest accounts", available: false }
      ]
    },
    {
      title: [{name:"Analytics & Reporting",available:false}],
      features: [
        { name: "Progress reports", available: true },
        { name: "Insights", available: false },
        { name: "Data warehouse sync", available: false }
      ]
    },
    {
      title: [{name:"Security",available:false}],
      features: [
        { name: "Google SSO", available: true },
        { name: "Admin roles", available: true },
        { name: "Advanced authentication", available: false },
        { name: "IP restrictions", available: false },
        { name: "SCIM provisioning", available: false },
        { name: "Domain claiming", available: false },
        { name: "Audit log", available: false },
        { name: "Third-party app management", available: false },
        { name: "HIPAA compliance", available: false }
      ]
    },
    {
      title: [{name:"Support",available:false}],
      features: [
        { name: "Priority support", available: false },
        { name: "Account manager", available: false },
        { name: "Custom terms", available: false },
        { name: "Uptime SLA", available: false }
      ]
    }
  ];
  const plan3 = [ {
    title: [{name:"Business",available: true}],
    features: [
      { name: "Unlimited members", available: true },
      { name: "Unlimited file uploads", available: true },
      { name: "Unlimited issues", available: true },
      { name: "Unlimited teams", available: true }
    ]
  },
  {
    title:[{name:"Features",available:false}],
    features: [
      { name: "Issues, projects, cycles, and initiatives", available: true },
      { name: "Customer requests", available: true },
      { name: "Integrations", available: true },
      { name: "API and webhook access", available: true },
      { name: "Import and export", available: true },
      { name: "Triage", available: true },
      { name: "Issue sync", available: true },
      { name: "Support integrations", available: true },
      { name: "Triage responsibility", available: true },
      { name: "Linear Asks", available: true },
      { name: "Issue SLAs", available: false }
    ]
  },
  {
    title: [{name:"Team management",available:false}],
    features: [
      { name: "Sub-teams", available: true},
      { name: "Private teams", available: true},
      { name: "Guest accounts", available: true}
    ]
  },
  {
    title:[{name:"Analytics & Reporting",available:false}],
    features: [
      { name: "Progress reports", available: true },
      { name: "Insights", available: true },
      { name: "Data warehouse sync", available: false }
    ]
  },
  {
    title: [{name:"Security",available:false}],
    features: [
      { name: "Google SSO", available: true },
      { name: "Admin roles", available: true },
      { name: "Advanced authentication", available: true },
      { name: "IP restrictions", available: false },
      { name: "SCIM provisioning", available: false },
      { name: "Domain claiming", available: false },
      { name: "Audit log", available: false },
      { name: "Third-party app management", available: false },
      { name: "HIPAA compliance", available: false }
    ]
  },
  {
    title: [{name:"Support",available:false}],
    features: [
      { name: "Priority support", available: false },
      { name: "Account manager", available: false },
      { name: "Custom terms", available: false },
      { name: "Uptime SLA", available: false }
    ]
  }
];
const plan4 =[
  {title: [{name:"Enterprise",available:true}],
  features: [
    { name: "Unlimited members", available: true },
    { name: "Unlimited file uploads", available: true },
    { name: "Unlimited issues", available: true },
    { name: "Unlimited teams", available: true }
  ]
},
{
  title: [{name:"Features",available:false}],
  features: [
    { name: "Issues, projects, cycles, and initiatives", available: true },
    { name: "Customer requests", available: true },
    { name: "Integrations", available: true },
    { name: "API and webhook access", available: true },
    { name: "Import and export", available: true },
    { name: "Triage", available: true },
    { name: "Issue sync", available: true },
    { name: "Support integrations", available: true },
    { name: "Triage responsibility", available: true },
    { name: "Linear Asks", available: true },
    { name: "Issue SLAs", available: false }
  ]
},
{
  title: [{name:"Team management",available:false}],
  features: [
    { name: "Sub-teams", available: true},
    { name: "Private teams", available: true},
    { name: "Guest accounts", available: true}
  ]
},
{
  title: [{name:"Analytics & Reporting",available:false}],
  features: [
    { name: "Progress reports", available: true },
    { name: "Insights", available: true },
    { name: "Data warehouse sync", available: true }
  ]
},
{
  title: [{name:"Security",available:false}],
  features: [
    { name: "Google SSO", available: true },
    { name: "Admin roles", available: true },
    { name: "Advanced authentication", available: true },
    { name: "IP restrictions", available: true },
    { name: "SCIM provisioning", available: true },
    { name: "Domain claiming", available: true },
    { name: "Audit log", available: true },
    { name: "Third-party app management", available: true },
    { name: "HIPAA compliance", available: true }
  ]
},
{
  title: [{name:"Support",available:false}],
  features: [
    { name: "Priority support", available: true },
    { name: "Account manager", available: true },
    { name: "Custom terms", available: true },
    { name: "Uptime SLA", available: true }
  ]
}  
]
  return(
    <div className="bg-black text-white flex justify-center mt-40">
      
      <div>
      {plan1.map((plan, index) => {
          return (
            <BenefitCard
              key={index}
              h1={plan.title[0]}
  
              subheading={plan.features}
            />
          );
        })}
            <div className="flex justify-start p-5 pt-8">
                  <button className="bg-btn text-white p-2 px-16 rounded-lg cursor-pointer hover:bg-buttonHover">Get started</button>
              </div>
      </div>
      <div>
        {plan2.map((plan, index) => {
            return (
              <BenefitCard
                key={index}
                h1={plan.title[0]}
                subheading={plan.features}
              />
            );
          })} 
            <div className="flex justify-start p-5 pt-8">
                  <button className="bg-btn text-white p-2 px-16 rounded-lg cursor-pointer hover:bg-buttonHover">Get started</button>
              </div>
          </div>
      <div className="bg-btn rounded-2xl">
        {plan3.map((plan, index) => {
            return (
              <BenefitCard
                key={index}
                h1={plan.title[0]}
                h1class={plan.title[0].available ? undefined : "text-btn  "}
                subheading={plan.features}
              />
            );
          })} 
          <div className="flex flex-col justify-start p-5 pt-8 text-center gap-2">
            <button className="bg-white/80 text-black p-2 px-16 rounded-lg cursor-pointer">Get started</button>
            <p className="text-gray-500 text-sm pt-2">or <a href="" className="underline text-white/80 text-sm">contact sales</a></p>
          </div>
          
      </div>
      <div>
          {plan4.map((plan, index) => (
            <BenefitCard
              key={index}
              h1={plan.title[0]}
              
              subheading={plan.features}
            />
          ))}
              <div className="flex justify-start p-5 pt-8">
                  <button className="bg-btn text-white p-2 px-16 rounded- cursor-pointer hover:bg-buttonHover rounded-lg">Request trial</button>
                  
              </div>
              
      </div>
    </div>
)}
export default Benefits;