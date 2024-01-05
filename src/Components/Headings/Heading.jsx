const Heading = ({
  content="Text",
  level = "h2",
  textAlign = "left",
  textColor = "#000000",
  fontSize = "24px",
  fontWeight = "normal",
  fontFamily = "PT Serif, sans-serif",
  letterSpacing = "normal",
  lineHeight = "1",
  margin = "0",
  padding = "0",
  classType = "H1",
}) => {
  const styles = {
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight,
    margin: margin,
    padding: padding,
    textAlign: textAlign,
  };

  const HeadingTag = `${level}`;

  return (
    <HeadingTag className={` ${classType}`} style={styles}>
      {content}
    </HeadingTag>
  );
};

export default Heading;
