import { Features } from "tailwindcss";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import BenefitCard from "./BenefitCard";


function Benefits(){
  const plans = [
    
    
      {
        title: "Free",
        features: [
          { name: "Unlimited members", available: true },
          { name: "10MB file uploads", available: true },
          { name: "250 issues", available: true },
          { name: "2 teams", available: true }
        ]
      },
      {
        title: "Features",
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
        title: "Team management",
        features: [
          { name: "Sub-teams", available: false },
          { name: "Private teams", available: false },
          { name: "Guest accounts", available: false }
        ]
      },
      {
        title: "Analytics & Reporting",
        features: [
          { name: "Progress reports", available: true },
          { name: "Insights", available: false },
          { name: "Data warehouse sync", available: false }
        ]
      },
      {
        title: "Security",
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
        title: "Support",
        features: [
          { name: "Priority support", available: false },
          { name: "Account manager", available: false },
          { name: "Custom terms", available: false },
          { name: "Uptime SLA", available: false }
        ]
      }

    
  ];  
  return(
    <div className="bg-black text-white flex justify-center">
      <div>
      {plans.map((plan, index) => {
          return (
            <BenefitCard
              key={index}
              h1={plan.title}
              subheading={plan.features}
            />
          );
        })}
      </div>
    </div>
  )
}
export default Benefits;