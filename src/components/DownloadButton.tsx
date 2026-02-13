/**
 * Animated Download Button Component
 * Creates an animated button for downloading files
 */

import { useTheme } from '../contexts/ThemeContext';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  fileName: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const DownloadButton = ({
  href,
  fileName,
  variant = 'primary',
  className = ''
}: DownloadButtonProps) => {
  const { currentTheme } = useTheme();

  // Determine button classes based on variant
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden inline-flex";
  const primaryClasses = `${currentTheme.btnPrimary} ${currentTheme.textColor} ${currentTheme.cardShadowTailwind} hover:from-[#00A0D0] hover:to-[#0052CC] shadow-lg hover:shadow-[0_10px_20px_rgba(0,194,255,0.3)]`;
  const secondaryClasses = `${currentTheme.btnSecondary} ${currentTheme.accentColor} hover:bg-[${currentTheme.accentColor}]/10`;

  const buttonClasses = [
    baseClasses,
    variant === 'primary' ? primaryClasses : secondaryClasses,
    className
  ].join(' ');

  return (
    <a
      href={href}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      <Download size={18} />
      Download CV
    </a>
  );
};

export default DownloadButton;