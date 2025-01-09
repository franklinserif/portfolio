import { useEffect, useRef, useState } from 'react'

export const useLinesCount = <T extends HTMLElement>(): [
  number,
  React.MutableRefObject<T | null>,
] => {
  const elementRef = useRef<T | null>(null)
  const [height, setHeight] = useState(0)
  const [lines, setLines] = useState(0)

  useEffect(() => {
    if (!elementRef?.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.contentRect.height
        setHeight(newHeight)
      }
    })

    resizeObserver.observe(elementRef.current)

    return () => {
      if (!elementRef?.current) return
      resizeObserver.unobserve(elementRef.current)
    }
  }, [])

  useEffect(() => {
    if (!elementRef?.current) return

    const styles = window.getComputedStyle(elementRef.current)
    const lineHeight = parseFloat(styles.lineHeight)

    setLines(Math.floor(height / lineHeight))
  }, [height])

  return [lines, elementRef]
}
