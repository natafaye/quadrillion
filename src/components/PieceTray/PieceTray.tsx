import type { UnplacedPiece } from "../../shared/types"
import StandalonePiece from "../Piece/StandalonePiece"

type Props = {
    pieceList: UnplacedPiece[]
    onRotate: (placeId: number) => void 
}

export default function PieceTray({ pieceList, onRotate }: Props) {
    return (
        <div className="flex justify-center gap-4 px-4 py-4 bg-gray-300">
            {pieceList.map(piece => (
                <StandalonePiece key={piece.id} piece={piece} onRotate={() => onRotate(piece.id)} />
            ))}
        </div>
    )
}