import React, { useState } from "react";

const paymentMethods = [
  { key: "cod", label: "Cash on Delivery (COD)", enabled: true, icon: "🚚" },
  { key: "bank", label: "Bank Transfer", enabled: false, icon: "🏦" },
  { key: "credit", label: "Credit/Debit Card", enabled: false, icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mastercard" className="w-6  inline" />, },
  { key: "promptpay", label: "PromptPay/QR Code", enabled: false, icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png?20231007205453" alt="promptpay" className="w-6 inline" />, },
];

export default function MethodPayment({ value, onChange }) {
  const [selected, setSelected] = useState(value || "cod");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (key) => {
    if (paymentMethods.find((m) => m.key === key && m.enabled)) {
      setSelected(key);
      if (onChange) onChange(key);
      setShowPopup(false);
    }
  };

  const selectedMethod = paymentMethods.find((m) => m.key === selected);

  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-xl mx-auto">
      <h3 className="font-bold text-base mb-3">Select Payment Method</h3>
      {/* Show only selected method */}
      <div className="flex items-center gap-3 p-3 border rounded mb-3">
        <span className="text-xl">{selectedMethod.icon}</span>
        <span className="font-medium">{selectedMethod.label}</span>
        <button
          className="ml-auto px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded font-medium text-sm"
          type="button"
          onClick={() => setShowPopup(true)}
        >
          Choose another method
        </button>
      </div>
      {/* Payment method popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowPopup(false)} />
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10">
            <h4 className="font-bold text-base mb-4">Select Payment Method</h4>
            <div className="flex flex-col gap-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.key}
                  className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-all ${method.enabled ? (selected === method.key ? "border-green-600 bg-green-50" : "hover:border-green-400") : "opacity-50 cursor-not-allowed"}`}
                >
                  <span className="text-xl">{method.icon}</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.key}
                    checked={selected === method.key}
                    onChange={() => handleChange(method.key)}
                    disabled={!method.enabled}
                    className="accent-green-600 w-5 h-5"
                  />
                  <span className="font-medium">{method.label}</span>
                  {!method.enabled && (
                    <span className="ml-2 text-xs text-gray-400">(Coming soon)</span>
                  )}
                </label>
              ))}
            </div>
            <button
              className="mt-5 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded font-medium"
              type="button"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
