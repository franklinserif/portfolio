import { type FC, useEffect, useRef, useState } from 'react'
import { useLinesCount } from 'src/hooks/useLinesCount'

interface Props {
  text: string
}

const TextComment: FC<Props> = ({ text }) => {
  const [lines, elementRef] = useLinesCount<HTMLDivElement>()
  const [leftNumbers, setLeftNumbers] = useState<string[]>([])

  useEffect(() => {
    const listOfWords = Array.from({ length: lines + 2 }).map((_, index) => {
      if (index === 0) {
        return `${index + 1} /**`
      }

      if (index === lines + 1) {
        return `${index + 1} */`
      }

      return `${index + 1} *`
    })

    setLeftNumbers(listOfWords)
  }, [lines])

  return (
    <div className="text-white flex gap-5 pt-5">
      <div className="flex flex-col pl-5">
        {leftNumbers.map((lineSymbol) => (
          <div
            key={lineSymbol}
            className="flex w-10 text-secondary text-snippets"
          >
            {lineSymbol}
          </div>
        ))}
      </div>
      <div
        className="mt-5 text-secondary text-snippets pr-5 text-wrap h-fit whitespace-pre-wrap"
        ref={elementRef}
      >
        {text}
      </div>
    </div>
  )
}

export default TextComment
