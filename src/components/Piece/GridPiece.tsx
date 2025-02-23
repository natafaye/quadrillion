import classNames from "classnames"
import { PlacedPiece, UnplacedPiece } from "../../shared/types"
import styles from "./GridPiece.module.css"
import { CSSProperties } from "react"

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
            "rounded-full shadow-md shadow-gray-900",
            styles.ball,
          )}
          style={{
            gridArea: `${anchorY + y + 1} / ${anchorX + x + 1} / span 1 / span 1`,
            background: `var(--color-${color})`,
            "--shadow-color-1": `color-mix(in srgb, var(--color-${color}-600) 20%, transparent)`,
            "--shadow-color-2": `var(--color-${color}-900)`
          } as CSSProperties}
        >
        </div>
      ))}
    </>
  )
}