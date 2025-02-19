import classNames from "classnames"
import { COLOR_GRADIENTS } from "./COLOR_GRADIENTS"
import { PlacedPiece, UnplacedPiece } from "../../shared/types"

type Props = {
  piece: UnplacedPiece | PlacedPiece
}

export default function GridPiece({ piece }: Props) {
  const { color, spots } = piece

  let [anchorX, anchorY] = ("location" in piece) ? piece.location : [0, 0]

  return (
    <>
      {spots.map(([x, y]) => (
        <div
          key={`${x},${y}`}
          className={classNames(
            "rounded-full bg-radial-[at_50%_40%] shadow-2xl shadow-black",
            COLOR_GRADIENTS[color]
          )}
          style={{
            gridArea: `${anchorY + y + 1} / ${anchorX + x + 1} / ${anchorY + y + 1} / ${anchorX + x + 1}`
          }}
        >
        </div>
      ))}
    </>
  )
}