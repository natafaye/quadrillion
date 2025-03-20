import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core"
import { ReactNode, useState } from "react"
import { GridPiece } from "../Piece"
import type { Coordinate, Piece } from "../../shared/types"

type Props = {
    children?: ReactNode
    pieceList: Piece[]
    setPieceList: React.Dispatch<React.SetStateAction<Piece[]>>
}

export default function DraggingContext({ children, pieceList, setPieceList }: Props) {
    const [activeId, setActiveId] = useState<null | number>(null)
    const [inLocation, setInLocation] = useState(false)

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active?.id ? Number(event.active?.id) : null)
    }

    const handleDragOver = (event: DragOverEvent) => {
        const piece = pieceList.find(p => p.id === Number(event.active?.id))!
        let newLocation = undefined
        console.log(event.over?.id)
        if (event.over?.id !== undefined && event.over?.id !== "TRAY") {
            newLocation = event.over?.id.toString()
                .split(",")
                .map(n => parseInt(n)) as Coordinate
        }
        // setActiveId(null)
        setPieceList(pieceList.map(p => p.id !== piece.id ? p : {
            ...p,
            location: newLocation
        }))
        setInLocation(!!newLocation)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveId(null)
        if (event.over) {
            //console.log(event.over)

        }
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
            {children}
            <DragOverlay>
                {activeId && <GridPiece piece={pieceList.find(p => p.id === activeId)!} dotHeight="30px" style={{ visibility: inLocation ? "hidden" : "visible"}} />}
            </DragOverlay>
        </DndContext>
    )
}