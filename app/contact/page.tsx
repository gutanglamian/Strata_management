export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
        {/* GET Form */}
        <div>
          <h2 className="text-xl font-semibold mb-2">GET Request Form</h2>
          <form action="/api/contact" method="get" className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send (GET)</button>
          </form>
        </div>
        {/* POST Form */}
        <div>
          <h2 className="text-xl font-semibold mb-2">POST Request Form</h2>
          <form action="/api/contact" method="post" className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send (POST)</button>
          </form>
        </div>
      </div>
    </div>
  );
} 