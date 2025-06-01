export default function About() {
  const team = [
    {
      name: "Jane Cooper",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "John Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Sarah Wilson",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We're revolutionizing property management with modern technology and exceptional service.
          Our mission is to make property management simpler, more efficient, and more enjoyable for everyone involved.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Strata Management, we believe that property management should be seamless and stress-free.
          We've built a comprehensive platform that helps property managers, building owners, and residents
          work together more effectively. Our innovative solutions streamline operations, improve communication,
          and enhance the overall property management experience.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
          <p className="text-gray-600">
            We constantly push the boundaries of what's possible in property management technology.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. We listen, adapt, and improve based on their needs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
          <p className="text-gray-600">
            We strive for excellence in every aspect of our service, from technology to customer support.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="mx-auto h-32 w-32 rounded-full"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
          Contact Us
        </button>
      </div>
    </div>
  );
} 