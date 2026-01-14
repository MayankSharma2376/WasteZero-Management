import React from 'react'

function HowItWorks() {
    const steps = [
  {
    step: "1",
    title: "Register / Login",
    description: "Create an account to access smart waste pickup services.",
  },
  {
    step: "2",
    title: "Schedule Pickup",
    description: "Select waste type, location, and preferred pickup time.",
  },
  {
    step: "3",
    title: "Agent Assignment",
    description: "Nearest available agent is assigned automatically.",
  },
  {
    step: "4",
    title: "Pickup & Tracking",
    description: "Track pickup status and view waste statistics.",
  },
];
  return (
    <div>
        <section className='bg-slate-950 text-white py-20'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-14'>
                    How It <span className='text-green-400'>Works</span>
                </h2>

                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
                    {steps.map((item, index)=>(
                        <div key={index} className='bg-slate-900 p-6 rounded-xl text-center'>
                            <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-400 text-black font-bold'>
                                {item.step}
                            </div>
                            <h3 className='font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-300'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default HowItWorks