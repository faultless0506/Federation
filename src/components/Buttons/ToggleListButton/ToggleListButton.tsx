import React from 'react';
import './ToggleListButton.scss';

interface ToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  expandText?: string;
  collapseText?: string;
  className?: string;
}

const ToggleListButton: React.FC<ToggleButtonProps> = ({
  isExpanded,
  onClick,
  expandText = 'Развернуть',
  collapseText = 'Свернуть',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`button__toggle-list ${isExpanded ? 'expanded' : 'collapsed'} ${className}`}
    >
      {isExpanded ? collapseText : expandText}
    </button>
  );
};

export default ToggleListButton;