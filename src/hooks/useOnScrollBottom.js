import { useEffect, useState } from 'react';

const useOnScrollBottom = (threshold) => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  
  
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // I need to check why scroll jump to top after fetch more items
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

export default useOnScrollBottom
