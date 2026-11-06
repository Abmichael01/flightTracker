import React from 'react';
import SectionPadding from '../../../layouts/SectionPadding';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

export default function TeamSection(): React.JSX.Element {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "DAVID ANDERSON",
      position: "CO-FOUNDER",
      description: "David, a co-founder at MyFlightLookup, leads with a commitment to innovation and customer satisfaction. His strategic vision ensures that MyFlightLookup provides accurate, real-time flight tracking.",
      image: "/f2.jpg"
    },
    {
      id: 2,
      name: "SOPHIE WALKER",
      position: "CO-FOUNDER",
      description: "Sophie, a co-founder of MyFlightLookup, is dedicated to keeping our flight tracking running smoothly. Her attention to detail and customer-centric approach drive the success of MyFlightLookup.",
      image: "/f1.jpg"
    },
    {
      id: 3,
      name: "RYAN CARTER",
      position: "CO-FOUNDER",
      description: "Ryan, a co-founder at MyFlightLookup, brings expertise and passion to the world of aviation. His dedication to accuracy and customer satisfaction sets the standard for our flight tracking.",
      image: "/f3.jpg"
    },
    {
      id: 4,
      name: "EMMA RODRIGUEZ",
      position: "OPERATIONS MANAGER",
      description: "Emma oversees daily operations at MyFlightLookup, ensuring seamless coordination between departments. Her exceptional organizational skills and problem-solving abilities keep everything running smoothly.",
      image: "/f6.jpg"
    },
    {
      id: 5,
      name: "MICHAEL CHEN",
      position: "HEAD OF CUSTOMER SERVICE",
      description: "Michael leads our customer service team with dedication and empathy. His commitment to resolving traveller concerns quickly and effectively has earned MyFlightLookup an outstanding customer satisfaction record.",
      image: "/f5.jpg"
    },
    {
      id: 6,
      name: "SARAH THOMPSON",
      position: "FLIGHT DATA COORDINATOR",
      description: "Sarah keeps track of the complex web of flight routes and schedules. Her analytical approach and attention to detail ensure that every flight status we show is up to date and accurate.",
      image: "/f4.jpg"
    }
  ];

  return (
    <SectionPadding className="bg-white py-30 max-w-7xl mx-auto w-full">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wide font-title">
            OUR STAFF
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Meet the Dedicated Team Behind Your Seamless Shipping Experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <img src={member.image} alt="" className="size-24 rounded-full border" />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>

              {/* Position */}
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                {member.position}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionPadding>
  );
}