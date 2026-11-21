export function shouldHideHeader(currentY, previousY) {
  return currentY > 80 && currentY > previousY;
}
