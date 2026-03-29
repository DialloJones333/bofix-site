import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneModel: "",
    issue: "",
    location: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, this is where Axios or Formspree will be used to actually send the data.
    console.log("Booking request:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center shadow-sm">
        <h3 className="text-xl font-bold mb-2">Request Received!</h3>
        <p>
          Thanks {formData.name}, I'll be in touch shortly to confirm your
          repair.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        Request a Mobile Repair
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* Added htmlFor="name" */}
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Your Name
          </label>
          {/* Added id="name" */}
          <input
            id="name"
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phoneModel"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              iPhone Model
            </label>
            <select
              id="phoneModel"
              name="phoneModel"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="">Select model...</option>
              <option value="iPhone 8/SE">iPhone 8 / SE</option>
              <option value="iPhone 11-13">iPhone 11 - 13</option>
              <option value="iPhone 14-16">iPhone 14 - 16</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Meeting Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., Uptown Coffee Shop"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="issue"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            What needs fixing?
          </label>
          <textarea
            id="issue"
            name="issue"
            required
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Screen is cracked and touch isn't working..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md"
        >
          Send Booking Request
        </button>
      </form>
    </div>
  );
}
