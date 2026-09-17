"use client";

interface PasteBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PasteBox({ value, onChange }: PasteBoxProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your content here..."
      className="w-full h-64 bg-gray-100 text-gray-900 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-4 font-mono resize-y"
    />
  );
}