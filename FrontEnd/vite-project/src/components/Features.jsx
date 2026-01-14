import React from 'react'

function Features() {
    const features = [
        {
            title: "Waste Categorization",
            description: "Easily categorize waste into plastic, organic, e-waste, and more for efficent recycling.",
            icon: "♻️"
        },

        {
            title: "Smart Pickup Scheduling",
            description: "Schedule waste pickups at your convenience with intelligent time and location handling.",
            icon: "🚛"

        },
        {
            title: "Location-Based Assignment",
            description: "Pickup agents are assigned dynamically based on geographic location.",
            icon: "📍"
           
        },{
            title: "Tracking & Statistics",
    description:
      "Track your waste history and view environmental impact statistics.",
    icon: "📊",

        }, 
        {
            title: "Notifications",
    description:
      "Get real-time updates for pickups, assignments, and messages.",
    icon: "🔔",

        }
    ]
  return (
    <div>
        <section className='bg-slate-900 text-white py-20'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Platform <span className='text-green-400'>Features</span>
                </h2>
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index)=>(
                        <div key={index} className='bg-slate-800 p-6 rounded-xl hover:scale-105 transition-transform'>
                            <div className='text-4xl mb-4'>{feature.icon}</div>
                            <div className='text-xl font-semibold mb-2'>
                                {feature.title}
                            </div>
                            <div className='text-gray-300 text-sm'>
                                {feature.description}
                            </div>

                        </div>
                    
                    ))}
                </div>
            </div>

        </section>
    </div>
  )
}

export default Features