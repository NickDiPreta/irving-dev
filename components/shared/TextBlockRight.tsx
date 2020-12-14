import React from 'react'

interface TextBlockRightProps {
  fontSize: number
  height?: number
  width?: number
  text: Array<string>
  fontWeight?: number
  fontFamily?: string
}

export const TextBlockRight: React.FC<TextBlockRightProps> = ({
  fontSize,
  height,
  width,
  text,
  fontWeight,
  fontFamily,
}) => {
  const paras = text.map((e) => <p key={text.indexOf(e)}>{e}</p>)
  return (
    <>
      <ul>{paras}</ul>
      <style jsx>{`
        ul {
          font-family: '${fontFamily}';
          font-size: ${fontSize}px;
          height: ${height}px;
          width: ${width}px;
          font-weight: ${fontWeight};
        }
      `}</style>
    </>
  )
}
