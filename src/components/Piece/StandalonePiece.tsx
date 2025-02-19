import { PlacedPiece, UnplacedPiece } from "../../shared/types"
import GridPiece from "./GridPiece"

type Props = {
    piece: UnplacedPiece | PlacedPiece
    onRotate?: () => void
}

export default function StandalonePiece({ piece, onRotate }: Props) {
    const { dimensions: [width, height] } = piece
    return (
        <div
          className="grid" style={{
            gridColumn: width,
            gridRow: height,
            aspectRatio: width / height,
            height: height * 2 + "rem"
          }}
          onClick={onRotate}
        >
            <GridPiece piece={piece}/>
        </div>
    )
}