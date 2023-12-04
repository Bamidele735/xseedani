import React from "react";

export default function TermsAndCondition() {
  return (
    <div>
      <div>
        <div
          className="flex flex-row justify-start items-start
 mb-2"
        >
          <input
            type="checkbox"
            className="mr-2 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-default-checkbox"
          />
          <label
            htmlFor="hs-default-checkbox"
            className="text-sm text-white ms-3 dark:"
          >
            I have read, understand and accept the terms of Service.
          </label>
        </div>
        <div
          className="flex flex-row justify-start items-start
 mb-2"
        >
          <input
            type="checkbox"
            className="mr-2 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checked-checkbox"
            defaultChecked
          />
          <label
            htmlFor="hs-checked-checkbox"
            className="text-sm text-white ms-3 dark:"
          >
            I have read, understand and accept the privacy policy{" "}
          </label>
        </div>
        <div
          className="flex flex-row justify-start items-start
 mb-2"
        >
          <input
            type="checkbox"
            className="mr-2 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-checked-checkbox"
            defaultChecked
          />
          <label
            htmlFor="hs-checked-checkbox"
            className="text-sm text-white ms-3 dark:"
          >
            I have read, understand and accept that metaxseed nodes are not
            investments.
          </label>
        </div>
      </div>
    </div>
  );
}
