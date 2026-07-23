import React from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  title: string | null;
  content: string | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  title,
  content,
  onClose,
}) => {
  if (!title || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg p-8 border border-[#c4c7c7] shadow-xl relative text-[#1a1c1c] rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#747878] hover:text-black focus:outline-none"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <h3 className="font-serif-display text-2xl uppercase tracking-wider text-black mb-4 pr-8">
          {title}
        </h3>

        <div className="text-sm text-[#444748] leading-relaxed whitespace-pre-line space-y-3">
          {content}
        </div>

        <div className="mt-8 pt-4 border-t border-[#e2e2e2] text-right">
          <button
            onClick={onClose}
            className="border border-black px-6 py-2.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
