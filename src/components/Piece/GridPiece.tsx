import classNames from "classnames"
import { Piece } from "../../shared/types"
import styles from "./GridPiece.module.css"
import { CSSProperties, HTMLAttributes, Ref } from "react"

export type GridPieceProps = {
    piece: Piece
    onRotate?: () => void
    dotHeight?: string
    ref?: Ref<HTMLDivElement>
    className?: string
    style?: CSSProperties
} & HTMLAttributes<HTMLDivElement>

export default function GridPiece({ piece, onRotate, dotHeight, ref, className, style, ...props }: GridPieceProps) {
    const { color, spots, dimensions: [width, height] } = piece
    let [anchorX, anchorY] = piece.location || [0, 0]

    return (
        <div
            ref={ref}
            className={classNames("grid", className)} style={{
                gridColumn: width,
                gridRow: height,
                gridArea: `${anchorY + 1} / ${anchorX + 1} / span ${height} / span ${width}`,
                ...(dotHeight ? {
                    aspectRatio: width / height,
                    height: `calc(${dotHeight} * ${height})`
                }: null),
                ...style
            }}
            onClick={onRotate}
            {...props}
        >
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
                        gridArea: `${y + 1} / ${x + 1} / span 1 / span 1`,
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
        </div>
    )
}