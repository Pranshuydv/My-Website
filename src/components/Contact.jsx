import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "918954382678"; // ✅ Replace with your number

        // Format message with line breaks using %0A
        const text = `Hello! 👋%0AMy name is *${form.name}* (%0AEmail: ${form.email})%0A%0A${form.message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappURL, "_blank");
    };


    return (
        <section id="contact" className="bg-black text-white py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
                    Contact Me
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-xl"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-md transition duration-300"
                    >
                        📩 Send on WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
