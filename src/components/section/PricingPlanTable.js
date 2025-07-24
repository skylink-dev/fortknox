'use client';
import React, { Fragment } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

export default function CloudComparisonTable({
  title = "Pricing",
  description = "Use Linear for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.",
  providers = ['Free', 'Basic', 'Business', 'Enterprise'],
  content = [
  {
    label: 'Members',
    values: [
      { value: 'Unlimited', title: 'members', enum: 'bright' },
      { value: 'Unlimited', title: 'members', enum: 'bright' },
      { value: 'Unlimited', title: 'members', enum: 'light' },
      { value: 'Unlimited', title: 'members', enum: 'light' },
    ],
  },
  {
    label: 'Uploads',
    values: [
        { value: '10MB', title: 'file upload', enum: 'bright' },
        { value: 'Unlimited', title: 'file uploads', enum: 'bright' },
        { value: 'Unlimited', title: 'file uploads', enum: 'bright' },
        { value: 'Unlimited', title: 'file uploads', enum: 'bright' },
    ],
  },
  {
    label: 'Issues',
    values: [
      { value: '250 issues', title: 'issues', enum: 'light' },
      { value: 'Unlimited', title: 'issues', enum: 'bright' },
      { value: 'Unlimited', title: 'issues', enum: 'bright' },
      { value: 'Unlimited', title: 'issues', enum: 'bright' },
    ],
  },
  {
    label: 'Teams',
     values: [
      { value: '2', title: 'Teams', enum: 'light' },
      { value: '2', title: 'Teams', enum: 'light' },
      { value: 'Unlimited', title: 'teams', enum: 'bright' },
      { value: 'Unlimited', title: 'teams', enum: 'bright' },
    ],
  },
  {
    label: 'Core Features',


    values: [
        { value: 'Issues, projects, cycles, and initiatives', title: '', enum: 'bright' },
        { value: 'Issues, projects, cycles, and initiatives', title: '', enum: 'bright' },
        { value: 'Issues, projects, cycles, and initiatives', title: '', enum: 'bright' },
        { value: 'Issues, projects, cycles, and initiatives', title: '', enum: 'bright' }],
  },
  {
    label: 'Customer Requests',
    values: [
        { value: 'Customer requests', title: '', enum: 'bright' },
        { value: 'Customer requests', title: '', enum: 'bright' },
        { value: 'Customer requests', title: '', enum: 'bright' },
        { value: 'Customer requests', title: '', enum: 'bright' }],},
  {
    label: 'Integrations',
    values: [
        { value: 'Integrations', title: '', enum: 'bright' },
        { value: 'Integrations', title: '', enum: 'bright' },
        { value: 'Integrations', title: '', enum: 'bright' },
        { value: 'Integrations', title: '', enum: 'bright' }],
  },
  {
    label: 'API & Webhook Access',
    values: [
        { value: 'API & Webhook Access', title: '', enum: 'bright' },
        { value: 'API & Webhook Access', title: '', enum: 'bright' },
        { value: 'API & Webhook Access', title: '', enum: 'bright' },
        { value: 'API & Webhook Access', title: '', enum: 'bright' }],
  },
  {
    label: 'Import & Export',
    values: [
        { value: 'Import and export', title: '', enum: 'bright' },
        { value: 'Import and export', title: '', enum: 'bright' },
        { value: 'Import and export', title: '', enum: 'bright' },
        { value: 'Import and export', title: '', enum: 'bright' }],
  },
  {
    label: 'Triage',
    values: [
        { value: 'Triage', title: '', enum: 'bright' },
        { value: 'Triage', title: '', enum: 'bright' },
        { value: 'Triage', title: '', enum: 'bright' },
        { value: 'Triage', title: '', enum: 'bright' }],  
  },
  {
    label: 'Issue Sync',
    values: [
        { value: 'Issue sync', title: '', enum: 'bright' },
        { value: 'Issue sync', title: '', enum: 'bright' },
        { value: 'Issue sync', title: '', enum: 'bright' },
        { value: 'Issue sync', title: '', enum: 'bright' }],  
  },
  {
    label: 'Support Integrations',
    values: [
      { value: '', title: 'Support integrations', enum: 'light' },
      { value: '', title: 'Support integrations', enum: 'light' },
      { value: 'Support integrations', title: '', enum: 'light' },
      { value: 'Support integrations', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Triage Responsibility',
    values: [
      { value: '', title: 'Triage responsibility', enum: 'light' },
      { value: '', title: 'Triage responsibility', enum: 'light' },
      { value: 'Triage responsibility', title: '', enum: 'light' },
      { value: 'Triage responsibility', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Triage Routing',
    values: [
      { value: '', title: 'Triage routing', enum: 'light' },
      { value: '', title: 'Triage routing', enum: 'light' },
      { value: '', title: 'Triage routing', enum: 'light' },
      { value: 'Triage routing', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Sub-Initiatives',
    values: [
      { value: '', title: 'Sub-initiatives', enum: 'light' },
      { value: '', title: 'Sub-initiatives', enum: 'light' },
      { value: '', title: 'Sub-initiatives', enum: 'light' },
      { value: 'Sub-initiatives', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Issue SLAs',
    values: [
      { value: '', title: 'Issue SLAs', enum: 'light' },
      { value: '', title: 'Issue SLAs', enum: 'light' },
      { value: '', title: 'Issue SLAs', enum: 'light' },
      { value: 'Issue SLAs', title: '', enum: 'bright' },
    ],
  },
  {
    label: 'Team Management',
    values: [
      {value:'' , title: 'Sub-teams', enum: 'light' },
      { value: '', title: 'Sub-teams', enum: 'light' },
      { value: 'Sub-teams', title: '', enum: 'bright' },
      { value: 'Sub-teams', title: '', enum: 'bright' },
    ],
  },
   {
    label: 'Team Management',
    values: [
      {value:'' , title: 'Private teams', enum: 'light' },
      { value: '', title: 'Private teams', enum: 'light' },
      { value: 'Private teams', title: '', enum: 'bright' },
      { value: 'Private teams', title: '', enum: 'bright' },
    ],
  },
   {
    label: 'Team Management',
    values: [
      {value:'' , title: 'Guest accounts', enum: 'light' },
      { value: '', title: 'Guest accounts', enum: 'light' },
      { value: 'Guest accounts', title: '', enum: 'bright' },
      { value: 'Guest accounts', title: '', enum: 'bright' }, 
      
    ],
  },
  {
    label: 'Analytics & Reporting',
    values: [
      {value:'Progress reports' , title: '', enum: 'bright' },
      { value: 'Progress reports', title: '', enum: 'bright' },
      { value: 'Progress reports', title: '', enum: 'bright' },
      { value: 'Progress reports', title: '', enum: 'bright' },
      
    ],
  },
   {
    label: 'Analytics & Reporting',
    values: [
      {value:'' , title: 'Insights', enum: 'light' },
      { value: '', title: 'Insights', enum: 'light' },
      { value: 'Insights', title: '', enum: 'bright' },
      { value: 'Insights', title: '', enum: 'bright' },
      
      
    ],
  },
   {
    label: 'Analytics & Reporting',
    values: [
      {value:'' , title: 'Data warehouse sync', enum: 'light' },
      {value: '', title: 'Data warehouse sync', enum: 'light' },
      { value: '', title: 'Data warehouse sync', enum: 'light' },
      { value: 'Data warehouse sync', title: '', enum: 'bright' },
    ],
  },
  {
    label: 'Linear Asks',
   values: [
      {value:'' , title: 'Slack intake', enum: 'light' },
      { value: '', title: 'Slack intake', enum: 'light' },
      { value: 'Slack intake', title: '', enum: 'bright' },
      { value: 'Slack intake', title: '', enum: 'bright' },
    ],
  },
   {
    label: 'Linear Asks',
   values: [
      {value:'' , title: 'Email intake', enum: 'light' },
      { value: '', title: 'Email intake', enum: 'light' },
      { value: 'Email intake', title: '', enum: 'bright' },
      { value: 'Email intake', title: '', enum: 'bright' },
     
    ],
  },
   {
    label: 'Linear Asks',
   values: [
      {value:'' , title: 'Multiple Slack workspaces', enum: 'light' },
      { value: '', title: 'Multiple Slack workspaces', enum: 'light' },
      { value: '', title: 'Multiple Slack workspaces', enum: 'light' },
      { value: 'Multiple Slack workspaces', title: '', enum: 'bright' },
      
    ],
  },
   {
    label: 'Linear Asks',
   values: [
      {value:'' , title: 'Private Slack channels', enum: 'light' },
      { value: '', title: 'Private Slack channels', enum: 'light' },
      { value: '', title: 'Private Slack channels', enum: 'light' },
      { value: 'Private Slack channels', title: '', enum: 'bright' },
    ],
  },
   {
    label: 'Linear Asks',
   values: [
      {value:'' , title: 'Per-channel configurations', enum: 'light' },
      { value: '', title: 'Per-channel configurations', enum: 'light' },
      { value: '', title: 'Per-channel configurations', enum: 'light' },
      { value: 'Per-channel configurations', title: '', enum: 'bright' },
    ],
  },
  {
    label: 'Security',
    values: [
        { value: 'Google SSO', title: '', enum: 'bright' },
        { value: 'Google SSO', title: '', enum: 'bright' },
        { value: 'Google SSO', title: '', enum: 'bright' },
        { value: 'Google SSO + SAML', title: '', enum: 'bright' }],
  },
  {
    label: 'Admin Roles',
    values: [
        { value: '', title: 'Admin roles', enum: 'light' },
        { value: 'Admin roles', title: '', enum: 'bright' },
        { value: 'Admin roles', title: '', enum: 'bright' },
        { value: 'Admin roles', title: '', enum: 'bright' }],
  },
  {
    label: 'Advanced Authentication',
    values: [
      { value: '', title: 'Advanced authentication', enum: 'light' },
      { value: '', title: 'Advanced authentication', enum: 'light' },
      { value: 'Advanced authentication', title: '', enum: 'bright' },
      { value: 'Advanced authentication', title: '', enum: 'bright' },
      ,
    ],
  },
  {
    label: 'IP Restrictions',
    values: [
        { value: '', title: 'IP restrictions', enum: 'light' },
        { value: '', title: 'IP restrictions', enum: 'light' },
        { value: '', title: 'IP restrictions', enum: 'light' },
        { value: 'IP restrictions', title: '', enum: 'bright' }],
  },
  {
    label: 'SCIM Provisioning',
    values: [
        { value: '', title: 'SCIM provisioning', enum: 'light' },
        { value: '', title: 'SCIM provisioning', enum: 'light' },
        { value: '', title: 'SCIM provisioning', enum: 'light' },
        { value: 'SCIM provisioning', title: '', enum: 'bright' }],
  },
  {
    label: 'Domain Claiming',
    values: [
        { value: '', title: 'Domain claiming', enum: 'light' },
        { value: '', title: 'Domain claiming', enum: 'light' },
        { value: '', title: 'Domain claiming', enum: 'light' },
        { value: 'Domain claiming', title: '', enum: 'bright' }],
  },
  {
    label: 'Audit Log',
    values: [
        { value: '', title: 'Audit log', enum: 'light' },
        { value: '', title: 'Audit log', enum: 'light' },
        { value: '', title: 'Audit log', enum: 'light' },
        { value: 'Audit log', title: '', enum: 'bright' }],
  },
  {
    label: 'Third-party App Management',
    values: [
      { value: '', title: 'Third-party app management', enum: 'light' },
      { value: '', title: 'Third-party app management', enum: 'light' },
      { value: '', title: 'Third-party app management', enum: 'light' },
      { value: 'Third-party app management', title: '', enum: 'bright' },
    ],
  },
  {
    label: 'HIPAA Compliance',
    values: [
        { value: '', title: 'HIPAA compliance', enum: 'light' },
        { value: '', title: 'HIPAA compliance', enum: 'light' },
        { value: '', title: 'HIPAA compliance', enum: 'light' },
        { value: 'HIPAA compliance', title: '', enum: 'bright' }],
  },
  {
    label: 'Support',
    values: [
        { value: '', title: 'Priority support', enum: 'light' },
        { value: '', title: 'Priority support', enum: 'light' },
        { value: '', title: 'Priority support', enum: 'light' },
        { value: 'Priority support', title: '', enum: 'bright' }],
  },
  {
    label: 'Account Manage',
    values: [
      { value: '', title: 'Account manager', enum: 'light' },
      { value: '', title: 'Account manager', enum: 'light' },
      { value: '', title: 'Account manager', enum: 'light' },
      { value: 'Account manager', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Custom Terms',
    values: [
      { value: '', title: 'Custom terms', enum: 'light' },
      { value: '', title: 'Custom terms', enum: 'light' },
      { value: '', title: 'Custom terms', enum: 'light' },
      { value: 'Custom terms', title: '', enum: 'bright' },
      
    ],
  },
  {
    label: 'Uptime SLA',
    values: [
        { value: '', title: 'Uptime SLA', enum: 'light' },
      { value: '', title: 'Uptime SLA', enum: 'light' },
      { value: '', title: 'Uptime SLA', enum: 'light' },
      { value: 'Uptime SLA', title: '', enum: 'bright' },
      
    ],
  },
]
}) {
  return (
    <section id="pricing-table" style={{ backgroundColor: "black" }}>
      <div className="h-[110px]"></div>
      <div className="container mx-auto px-4">
        <div className="rounded-2xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center text-white">{title}</h2>
            <p className="text-white max-w-2xl mx-auto text-center mb-6">{description}</p>
          </div>
          <div className="max-w-[1200px] mx-auto overflow-x-auto mt-15">
            <table className="w-full table-auto border-collapse pricing-table">
              <thead>
                <tr className="text-2xl md:text-base text-white">
                  {Array.isArray(providers) &&
                    [...providers].map((provider, idx) => (
                      <th key={idx} className="px-8 pb-4 pt-10 text-[20px] text-left font-semibold border-b border-gray-700 whitespace-nowrap rounded-t-xl">
                        {provider}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(content) &&
                  content.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="border-b border-gray-700">
                        {item.values &&
                          [...item.values].map((val, i) => {
                            if (!val) return null;
                            console.log(val.enum)
                            return(
                            <td key={i} className="text-sm px-8 py-4 text-white"><div className="flex items-center justify-start"><span className={`w-5 h-5 mr-2 rounded-full flex items-center justify-center ${val.enum === "bright" ? "bg-red-500" : "bg-gray-600"}`}>{val.enum === "bright" ? <DoneIcon style={{ fontSize: "14px" }}></DoneIcon> : <CloseIcon style={{ fontSize: "14px" }}></CloseIcon>}</span><span>{val.value}</span><span className="text-gray-500 ml-1"> {val.title}</span></div></td>
)})}
                      </tr>
                    </React.Fragment>
                  ))}
                <tr className="border-t border-gray-600">
                  {Array.from({ length: content?.[0]?.values?.length || 4 }).map((_, i) => (
                    <td key={i} className="rounded-b-xl overflow-hidden"><div className="flex flex-col justify-center items-center mx-5 pb-12"><Link href="#" className="bg-white hover:bg-red-600 hover:text-white w-full px-3 py-2 rounded-md my-3 mt-6 mb-5 block text-center">Get Started</Link><div className='text-gray-500'>or <Link href="#" className="border-b border-color-white text-white">contact sales</Link></div></div></td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="h-[110px]"></div>
    </section>
  );
}
