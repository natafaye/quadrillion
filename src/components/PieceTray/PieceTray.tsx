import classNames from "classnames"
import type { UnplacedPiece } from "../../shared/types"
import StandalonePiece from "../Piece/StandalonePiece"
import styles from "./PieceTray.module.css"

type Props = {
    pieceList: UnplacedPiece[]
    onRotate: (placeId: number) => void
}

export default function PieceTray({ pieceList, onRotate }: Props) {
    return (
        <div className={classNames(
            "flex justify-center gap-4 px-4 py-4 bg-gray-500 overflow-x-auto",
            styles.styledScrollbar
        )}>
            {pieceList.map(piece => (
                <StandalonePiece key={piece.id} piece={piece} onRotate={() => onRotate(piece.id)} />
            ))}
        </div>
    )
}