import { useState, useEffect } from "react";
import { FiScissors, FiMapPin, FiAward, FiUmbrella } from "react-icons/fi";
import { FaPizzaSlice, FaDumbbell, FaCoffee, FaStar } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

function HomePage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [1200, 800, 1600, 900, 900, 1000];
    const timer = setTimeout(() => {
      if (step < delays.length) setStep(step + 1);
    }, delays[step] || 0);
    return () => clearTimeout(timer);
  }, [step]);

  const showUserMessage = step >= 1;
  const showTyping = step === 2;
  const showFirstReply = step >= 3;
  const showButton = step >= 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 py-12">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12 fade-in">
        <h1 className="text-5xl font-bold text-white mb-4">Meet Bino</h1>
        <p className="text-white text-xl mb-2">
          Your WhatsApp AI assistant that finds products and services nearby.
        </p>
        <p className="text-white/90 text-lg">
          Chat naturally, compare deals, get offers — all in WhatsApp.
        </p>
      </div>

      {/* Chat Messages */}
      <div className="max-w-lg mx-auto h-96 mb-12 relative space-y-6 overflow-hidden">
        {/* User Message */}
        {showUserMessage && (
          <div className="flex justify-end message-slide">
            <div className="bg-white/95 rounded-3xl px-5 py-3 max-w-xs shadow-lg">
              <p className="text-sm flex items-center gap-2 font-medium">
                <FiScissors className="w-4 h-4" />
                Need a haircut nearby
              </p>
              <p className="text-xs text-gray-500 mt-1 flex justify-end gap-1 items-center">
                3:07 PM <HiCheck className="w-3 h-3" />
                <HiCheck className="w-3 h-3" />
              </p>
            </div>
          </div>
        )}

        {/* Typing Indicator */}
        {showTyping && (
          <div className="flex justify-start fade-in">
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl px-5 py-3 shadow-lg">
              <div className="flex gap-2">
                <div
                  className="w-2 h-2 bg-white rounded-full bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* First AI Reply */}
        {showFirstReply && (
          <div className="flex justify-start message-slide">
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl px-5 py-3 max-w-xs shadow-lg text-white">
              <p className="text-sm flex items-center gap-2 font-medium">
                <FiMapPin className="w-4 h-4" />
                Found 3 great salons near Marathahalli
              </p>
              <p className="text-xs text-white/70 mt-1">3:08 PM</p>
            </div>
          </div>
        )}

        {/* More AI Replies */}
        {step >= 4 && (
          <div className="flex justify-start message-slide">
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl px-5 py-3 max-w-xs shadow-lg text-white">
              <p className="text-sm flex items-center gap-2 font-medium">
                <FiAward className="w-4 h-4" />
                Glow Salon – 25% off today!
              </p>
              <p className="text-xs text-white/70 mt-1">3:10 PM</p>
            </div>
          </div>
        )}

        {step >= 5 && (
          <div className="flex justify-start message-slide">
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl px-5 py-3 max-w-xs shadow-lg text-white">
              <p className="text-sm flex items-center gap-2 font-medium">
                <FiUmbrella className="w-4 h-4" />
                Urban Cuts – Free hair wash + 30% off
              </p>
              <p className="text-xs text-white/70 mt-1">3:10 PM</p>
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      {showButton && (
        <div className="text-center mb-12 fade-in">
          <button className="bg-white text-purple-600 font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
            Try Bino on WhatsApp
          </button>
        </div>
      )}

      {/* Cards */}
      {showButton && (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in">
          <div className="bg-white/95 rounded-3xl p-3 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-center items-center">
            <FiScissors className="w-12 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900 text-md mb-1">Glow Salon</h3>
            <p className="text-gray-600 mb-3 text-md">25% off today!</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.5</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-3xl p-3 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-center items-center">
            <FaPizzaSlice className="w-12 h-8 text-orange-600 mb-3" />
            <h3 className="font-bold text-gray-900 text-md mb-1">Pizza Hub</h3>
            <p className="text-gray-600 mb-3 text-md">Buy 1 Get 1 Free</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.7</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-3xl p-3 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-center items-center">
            <FaDumbbell className="w-12 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 text-md mb-1">
              FitZone Gym
            </h3>
            <p className="text-gray-600 mb-3 text-md">Free trial week</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.8</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-3xl p-3 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-center items-center">
            <FaCoffee className="w-12 h-8 text-amber-700 mb-3" />
            <h3 className="font-bold text-gray-900 text-md mb-1">Brew Cafe</h3>
            <p className="text-gray-600 mb-3 text-md">20% off all drinks</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.6</span>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .message-slide {
          animation: slideIn 0.6s ease-out;
        }
        .bounce {
          animation: bounce 1.4s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
