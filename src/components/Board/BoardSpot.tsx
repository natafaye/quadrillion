import classNames from "classnames"
import { Coordinate } from "../../shared/types"
import { useDroppable } from "@dnd-kit/core"

type Props = {
    coordinate: Coordinate
    color: "white" | "black"
    isBlocked?: boolean
}

export default function BoardSpot({ coordinate, color, isBlocked = false }: Props) {
    const { setNodeRef, isOver } = useDroppable({
        id: coordinate.join(",")
    })
    return (
        <div ref={setNodeRef} className={classNames(
            "aspect-square rounded-full bg-radial-[at_50%_75%]",
            isOver && "border-2 border-red-50",
            color === "black" && !isBlocked && "from-gray-800 to-black",
            color === "white" && !isBlocked && "from-gray-100 to-gray-300",
            color === "black" && isBlocked && "bg-gray-100",
            color === "white" && isBlocked && "bg-gray-800",
        )} />
    )
}