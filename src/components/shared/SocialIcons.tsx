import React from "react";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.635-.929-2.239-.244-.588-.493-.509-.678-.518-.176-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9-.12.58-.352 1.78-1.282 2.03-2.52.25-1.238.25-2.298.175-2.424-.075-.126-.276-.201-.577-.351z" />
      <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.115.549 4.181 1.595 6.002L.051 23.95l6.096-1.6c1.761.96 3.754 1.468 5.857 1.468 6.631 0 12.004-5.373 12.004-12.004C24.008 5.373 18.635 0 12.004 0zm0 21.996c-1.892 0-3.743-.51-5.352-1.472l-.384-.228-3.978 1.043 1.062-3.877-.25-.398a9.96 9.96 0 0 1-1.528-5.36C1.574 6.262 6.257 1.579 12.004 1.579c5.747 0 10.43 4.683 10.43 10.425 0 5.742-4.683 10.392-10.43 10.392z" />
    </svg>
  );
}
