const colors = [
  '#FF00FF', // magenta
  '#00FF00', // green
  '#FFA500', // orange
  '#0000FF', // blue
  '#FFFF00', // yellow
  '#00FFFF', // cyan
  '#800080', // purple
  '#FF0000', // red
  '#008000', // dark green
  '#000000', // black
  '#FFFFFF', // white
]

export function getColorByIndex(index: number): string {
  const colorIndex = index % colors.length
  return colors[colorIndex < 0 ? colorIndex + colors.length : colorIndex]
}
