export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for small buildings",
      features: [
        "Up to 20 units",
        "Basic maintenance tracking",
        "Email support",
        "Monthly reports",
        "Basic customer portal",
      ],
    },
    {
      name: "Professional",
      price: "$199",
      description: "Ideal for medium-sized properties",
      features: [
        "Up to 50 units",
        "Advanced maintenance tracking",
        "Priority email & phone support",
        "Weekly reports",
        "Advanced customer portal",
        "Financial reporting",
        "Document management",
      ],
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For large property portfolios",
      features: [
        "Unlimited units",
        "Full maintenance management",
        "24/7 priority support",
        "Real-time reporting",
        "Custom customer portal",
        "Advanced financial tools",
        "API access",
        "Custom integrations",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Pricing Plans</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose the perfect plan for your property management needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </p>
              <button className="mt-8 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Get Started
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 