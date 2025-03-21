export type Coordinate = [number, number]

export type Layout = {
    id: number
    dimensions: Coordinate
    slots: Coordinate[]
}

export type Tile = {
    id: number,
    color: "black" | "white",
    blocked: Coordinate[]
}

export type COLOR = "maroon" | "red" | "orange" |  
    "yellow" | "lightgreen" | "green" | "aqua" | 
    "lightblue" | "blue" | "darkblue" | "purple" | "pink"

export type Piece = {
    id: number
    color: COLOR
    dimensions: Coordinate
    spots: Coordinate[]
    location?: Coordinate
}

export type PlacedPiece = Required<Piece>