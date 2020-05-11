-----Inserts-----
db.places.insert(
  { name: "Tour Eiffel",
    location: {
      type: "Point",
      coordinates: [ 2.29448, 48.85837 ]
    }
  }
)

db.places.insert(
  { name: "Arc de Triomphe",
    location: {
      type: "Point",
      coordinates: [ 2.29502, 48.87379 ]
    }
  }
)

db.places.insert(
  { name: "Tour Eiffel",
    location: {
      type: "Point",
      coordinates: [ 2.36914, 48.85318 ]
    }
  }
)




-----1-----
db.places.find(
	{ location: 
		{ $near: 
			{ $geometry: 
				{ type: "Point", coordinates: [ 2.33764, 48.86061 ] }, $maxDistance: 3000, $minDistance: 0 } } }).pretty()

-----2-----
db.places.find({ location: { $geoWithin: { $geometry: { type: "Polygon", coordinates: [ [ [ 2.31028, 48.87239 ], [ 2.28744 , 48.8786], [ 2.28126 , 48.85545], [ 2.30513 , 48.85173], [ 2.31028, 48.87239 ] ] ] } } } }).pretty()

-----3-----
db.places.find( { location:  { $nearSphere: {  $geometry: {  type: "Point", coordinates: [ 2.34222, 48.87183 ]  },  $maxDistance: 3500,  $minDistance: 0  }} }).pretty()