import React from 'react';
import { Button } from '@nextui-org/button';

const ButtonWidget = ({
  text,
  link = '#',
  ButtonAlign = "left",
  target = '_self',
  backgroundColor = '#007bff',
  textColor = '#ffffff',
  fontSize = '16px',
  fontWeight = 'normal',
  fontFamily = 'Arial, sans-serif',
  letterSpacing = 'normal',
  lineHeight = '1.5',
  borderRadius = '4px',
  paddingVertical = '12px',
  paddingHorizontal = '24px',
  margin = '0',
  borderStyle = 'none',
  borderWidth = '0',
  boxShadow = 'none',
  className = '',
}) => {
  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: fontSize + 'px',
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    borderRadius: borderRadius,
    padding: `${paddingVertical} ${paddingHorizontal}`,
    margin: margin,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    boxShadow: boxShadow,
    ButtonAlign: ButtonAlign,
  };

  return (
    <Button
      href={link}
      target={target}
      className={className}
      style={styles}
    >
      {text}
    </Button>
  );
};

export default ButtonWidget;
