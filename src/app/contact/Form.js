import React, { useState } from 'react';
import Image from 'next/image'
import Check from './check.gif'
// import { Menu, X, MapPin } from 'lucide-react'

const locations = [
  {
    title: 'Batala office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '81, Inside Hathi Gate, Brahmana Gali, Batala 143505 IN',
  },
  {
    title: 'Chandigarh office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '3124, Sector 61, Phase-7, Mohali 160061 IN',
  },
  {
    title: 'Contact : +91 7009646377',
  },
  {
    title: 'E-mail : rraahhuullch@gmail.com',
  },
]
const Form = () => {
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    number: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Check if the phone number has exactly 10 digits
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!validatePhoneNumber(formData.number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setShowTick(true);

    const sheetDBEndpoint = 'https://sheetdb.io/api/v1/g0s8j7d1697tt';

    try {
      const response = await fetch(sheetDBEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        setShowTick(true);
        // Reset form data
        setFormData({
            fullName: '',
            gmail: '',
            number: '',
            query: '',
          });

          // Hide tick animation after 2 seconds (adjust as needed)
        setTimeout(() => {
          setShowTick(false);
        }, 2000);
      } else {
        console.error('Failed to send data, Please fill all details (correctly)');
        alert('Failed to send data, Please fill all details (correctly)');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    {/* <form className='contactusform' onSubmit={handleSubmit}>
      <p>GET IN TOUCH</p>

      <div className="mb-3 mt-1">
        <label htmlFor="fullName" className="form-label">
          Your Name *
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-black border"
            id="fullName"
            name="fullName"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='Jhon Dew'
            value={formData.fullName}
            onChange={handleChange} required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="gmail" className="form-label">
          E-mail *
        </label>
        <div className="input-group">
          <input
            type="email"
            className="form-control  bg-black border"
            id="gmail"
            name="gmail"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='example@gmail.com'
            value={formData.gmail}
            onChange={handleChange} required
          />
        </div>
      </div>

      <div class="mb-3">
              <label for="basic-url" class="form-label">
                Phone Number *
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control  bg-black border"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                  required
                  placeholder="8888XXXXXX"
                  name="number"
                  value={formData.number}
            onChange={handleChange} 
                />
              </div>{" "}
            </div>

      <div className="mb-3">
        <label htmlFor="query" className="form-label">
          Your Query *
        </label>
        <div className="input-group">
          <textarea
            type="text"
            className="form-control textarea  bg-black border"
            id="query"
            name="query"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder='Your Query Here !'
            value={formData.query}
            onChange={handleChange} required
          />
        </div>
      </div>

      <button type="submit">SEND</button>
    </form> */}
<title>Contact Us - RC Tech Solutions</title>
        <meta name="description" content="Contact us for inquiries, feedback, or any other questions you may have." />
        <meta name="keywords" content="contact, contact us, get in touch, inquiries, feedback, support, RC Tech Solutions, Rahul chauhan" />
        <meta property="og:title" content="Contact Us - RC Tech Solutions" />
        <meta property="og:description" content="Contact us for inquiries, feedback, or any other questions you may have." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rchauhan.com/contact" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - RC Tech Solutions" />
        <meta name="twitter:description" content="Contact us for inquiries, feedback, or any other questions you may have." />
        <meta name="twitter:image" content="/logo.png" />

    

<div className="bg-gradient-to-l from-black via-gray-700 to-black mx-auto max-w-full px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          {/* <Image
              width={200}
              height={200}
              alt="Contact us"
              className="block md:hidden max-h-full w-full rounded-lg object-cover "
              src="/contact.jpg"
            /> */}
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-[#FF5E36] md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-200">
                  Our friendly team would love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-mypurple bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 text-[#FF5E36] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="fullName"
                        name="fullName"
                        aria-describedby="basic-addon3 basic-addon4"
                        placeholder='Jhon Dew'
                        value={formData.fullName}
                        onChange={handleChange} required                        
                      />
                    </div>
            
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="gmail"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full text-[#FF5E36] rounded-md border border-mypurple bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="gmail"
                      name="gmail"
                      aria-describedby="basic-addon3 basic-addon4"
                      placeholder='example@gmail.com'
                      value={formData.gmail}
                      onChange={handleChange} required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      For="basic-url"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full text-[#FF5E36] rounded-md border border-mypurple bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                      required
                      placeholder="8888XXXXXX"
                      name="number"
                      value={formData.number}
                onChange={handleChange} 
                    />
                  </div>
                 
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="query"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 text-[#FF5E36] w-full rounded-md border border-mypurple bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="query"
                      name="query"
                      aria-describedby="basic-addon3 basic-addon4"
                      placeholder='Your Query Here !'
                      value={formData.query}
                      onChange={handleChange} required
                    
                      cols={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md hover:bg-[#FF5E36]/50 bg-[#FF5E36] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <Image
              width={500}
              height={500}
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="/contactus.jpg"
            />
          </div>
        </div>
      </div>

      {showTick && (
        <div className='messageok'>
        <div className="centered-div">
          <Image src={Check} alt="Check" id='check' />
        </div>
        </div>
      )}

{/* <div className="rounded-lg bg-mypurple">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-white">Our Offices</p>
                <p className="w-full text-lg text-gray-200">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-white">{location.title}</p>
                    <p className="w-full text-base  text-white">{location.timings}</p>
                    <p className="text-sm font-semibold text-white">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
         

    </>
  );
};

export default Form;
