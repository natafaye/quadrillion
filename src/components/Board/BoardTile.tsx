import classNames from "classnames"
import BoardSpot from "./BoardSpot"
import { isEqual, TILE_SIZE } from "../../shared/utilities"
import type { Coordinate, Tile } from "../../shared/types"

type Props = {
  tile: Tile
  slot: Coordinate
  onRotate?: () => void
}

export default function BoardTile({ tile: { color, blocked }, slot: [slotX, slotY], onRotate }: Props) {
  return (
    <div
      onClick={onRotate}
      className={classNames(
        "grid grid-cols-4 gap-1 p-1 rounded-xl shadow-lg",
        color === "black" ? "bg-gray-800" : "bg-gray-100"
      )}
    >
      {Array(TILE_SIZE).fill(null).map((_, y) => (
        Array(TILE_SIZE).fill(null).map((_, x) => (
          <BoardSpot
            key={x + "," + y}
            coordinate={[x + slotX, y + slotY]}
            color={color}
            isBlocked={blocked.some(spot => isEqual(spot, [x, y]))}
          />
        ))
      ))}
    </div>
  )
}