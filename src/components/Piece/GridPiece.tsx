import classNames from "classnames"
import { PlacedPiece, UnplacedPiece } from "../../shared/types"
import styles from "./GridPiece.module.css"
import { CSSProperties } from "react"

type Props = {
  piece: UnplacedPiece | PlacedPiece
  onRotate?: () => void
}

export default function GridPiece({ piece, onRotate }: Props) {
  const { color, spots } = piece

  let [anchorX, anchorY] = ("location" in piece) ? piece.location : [0, 0]

  return (
    <>
      {spots.map(([x, y]) => (
        <div
          key={`${x},${y}`}
          onClick={(event) => {
            if (onRotate) {
              // stop propogation if the grid piece has been given a rotate handler, so nothing else handles it
              event.stopPropagation()
              onRotate()
            }
          }}
          className={classNames(
            "rounded-full shadow-md shadow-gray-900",
            styles.ball,
          )}
          style={{
            gridArea: `${anchorY + y + 1} / ${anchorX + x + 1} / span 1 / span 1`,
            // set shadow-color CSS variables for .ball shadow styling
            background: `var(--color-${color})`,
            "--shadow-color-1": `color-mix(in srgb, var(--color-${color}-600) 20%, transparent)`,
            "--shadow-color-2": `var(--color-${color}-900)`,
            // Bottom Left covers shadow of top right, giving a perspective from the bottom left
            zIndex: (anchorY + y + 1) * 10 - (anchorX + x + 1),
          } as CSSProperties}
        >
        </div>
      ))}
    </>
  )
}