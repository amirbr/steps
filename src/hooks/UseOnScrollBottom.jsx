import { useEffect, useState } from 'react';

const UseOnScrollBottom = (threshold) => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const currentScrollTop = window.innerHeight + window.scrollY
    const scrollAtBottom = currentScrollTop >= document.documentElement.offsetHeight - threshold
    if(scrollAtBottom) {
      setIsAtBottom(scrollAtBottom)
    } else {
      setIsAtBottom(false)
    }
  }

  return { isAtBottom }
}

export default UseOnScrollBottom
