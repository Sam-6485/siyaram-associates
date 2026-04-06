import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  const calculateEMI = () => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi ? emi.toFixed(0) : 0;
  };

  return (
    <div className="font-sans bg-gray-50">

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md flex justify-between items-center px-6 py-4 z-50">
        <h1 className="text-xl font-bold text-blue-700">Siyaram Associates</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#calculator">Calculator</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Instant Loans Easily</h2>
        <p className="mb-6 text-lg">Fast Approval | Low Interest | Trusted Service</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Apply Now</button>
      </section>

      {/* Services */}
      <section id="services" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Home Loan",
            "Personal Loan",
            "Business Loan",
            "Car Loan",
            "Loan Against Property",
            "Education Loan",
          ].map((service, i) => (
            <div key={i} className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EMI Calculator */}
      <section id="calculator" className="bg-gray-100 p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">EMI Calculator</h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <label>Loan Amount: ₹{amount}</label>
            <input type="range" min="10000" max="5000000" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full" />
          </div>
          <div>
            <label>Interest Rate: {rate}%</label>
            <input type="range" min="1" max="20" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full" />
          </div>
          <div>
            <label>Tenure: {tenure} months</label>
            <input type="range" min="1" max="60" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full" />
          </div>
          <div className="text-2xl font-bold text-blue-700">Monthly EMI: ₹{calculateEMI()}</div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="p-12 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Very fast service and easy process!", "Got my loan approved quickly.", "Highly trusted and professional team."].map((t, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-xl shadow">
              <p>"{t}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">
          SiyaRam Associate <br />
          Office no 1 Ground floor, Amisa building <br />
          Bharati Vidyapeeth Rd, Pune - 411073
        </p>

        {/* NOTE: Replace action with your backend endpoint or use Formspree */}
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto space-y-4">
          <input name="name" className="w-full p-3 border rounded" placeholder="Name" required />
          <input name="phone" className="w-full p-3 border rounded" placeholder="Phone" required />
          <input name="email" type="email" className="w-full p-3 border rounded" placeholder="Email" required />
          <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">Submit</button>
        </form>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919923071737"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">© 2026 Siyaram Associates</footer>

    </div>
  );
}
