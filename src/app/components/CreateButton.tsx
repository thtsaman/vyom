"use client";

interface CreateButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export default function CreateButton({ onClick, isLoading = false }: CreateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Creating..." : "Create Paste"}
    </button>
  );
}