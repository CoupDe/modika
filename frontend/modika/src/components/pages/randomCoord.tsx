interface Coordinates {
  top: number;
  left: number;
}
const placedElements: Coordinates[] = [];

export const placePicture = (width: number, height: number): Coordinates[] => {
  const elementWidth = 128;
  const elementHeight = 128;
  const range = 60;
  const elementCount = 5;
  const coordinates: Coordinates[] = [];

  for (let i = 0; i < elementCount; i++) {
    let top = Math.floor(Math.random() * (height - elementHeight));
    let left = Math.floor(Math.random() * (width - elementWidth));

    // If the element overlaps, try again with a new position
    // if (isOverlapping) {
    //   i--;
    //   continue;
    // }

    // If the element does not overlap, add it to the placedElements array

    coordinates.push({ top, left });
  }

  return coordinates;
};
