export const scrollToBottom = (element: React.RefObject<HTMLDivElement>) => {
  if (!element.current) {
    return;
  }
  element.current.scrollTop = element.current.scrollHeight;
};
