import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alexander Moreka",
      message:
        "Simon delivered good work on this PHP development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong.",
      company: "Lecture at Ardhi University",
    },
    {
      name: "Alexander Moreka",
      message:
        "Simon is awesome he is the best and most reliable. He completes all the work on time. I have personally done two projects with this gentleman Super trustworthy",
      company: "Lecture at Adrhi University",
    },
    {
      name: "John Ilomo",
      message:
        "Simon is a great man with great knowledge about websites. He's very humble and cooperative. He's has done the work before time.",
      company: "Upwork Client",
    },
    {
      name: "Justin Edwin",
      message: "Amazing work! Delivered my website on time.",
      company: "",
    },
    {
      name: "James John",
      message: "Very professional and creative designs.",
      company: "",
    },
    {
      name: "Michael Brown",
      message: "The mobile app exceeded my expectations!",
      company: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(3);

  // Adjust testimonials per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerSlide(1);
      } else {
        setTestimonialsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonialsPerSlide]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      goToNext();
    }

    if (touchStart - touchEnd < -100) {
      goToPrev();
    }
  };

  const currentTestimonials = testimonials.slice(
    currentSlide * testimonialsPerSlide,
    (currentSlide + 1) * testimonialsPerSlide
  );

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          What My Clients Say About Me!
        </h2>

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:flex-1 transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6 leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                <div className="border-t border-gray-200 pt-3 md:pt-4">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900">
                    {testimonial.name}
                  </h3>
                  {testimonial.company && (
                    <p className="text-gray-600 text-sm md:text-base mt-1">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 md:gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
                  currentSlide === index ? "bg-blue-600 md:scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;