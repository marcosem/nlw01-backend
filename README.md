# New Level Week 01 - Backend

Frontend web of ECOLETA application, using Typescript, Javascript, and NodeJS.

## Routes
### get '/items'
List all available item to be recycled

#### Route Return
Array of items in the following format:
```
[
  {
    "id": <Item ID>,
    "title": <Item Description>,
    "image_url": <URL to Item image>
  }
]
```

### get '/points'
List all points in a pre determined area.

#### Query input
```
city: string
uf: string
items: comma separed item id
```

#### Route Return
Array of points in the following format:
```
[
  {
    "id": <Point Id>,
    "image": <Point Image file name>,
    "name": <Point Name>,
    "email": <Point e-mail>,
    "whatsapp": <Point Whatsapp>,
    "latitude": <Location Latitude>,
    "longitude": <Location Longitude>,
    "city": <City>,
    "uf": <Federal Unit - State>,
    "image_url": <URL to Point Image>
  },
]
```

### get '/points/:id'
Get an specific point by id.

#### Request input
```
id: point id
```

#### Route Return
Point object in the following format:
```
{
  "point": {
    "id": <Point Id>,
    "image": <Point Image file name>,
    "name": <Point Name>,
    "email": <Point e-mail>,
    "whatsapp": <Point Whatsapp>,
    "latitude": <Location Latitude>,
    "longitude": <Location Longitude>,
    "city": <City>,
    "uf": <Federal Unit - State>,
    "image_url": <URL to Point Image>
  },
  "items": [
    {
      "title": <Item Title>
    }
  ]
}
```

### post '/points'
Add a point to the database.

#### Route input (Multipart data)
```
{
  "name": <Point Name>,
  "image": <Point Image file name>,
  "email": <Point e-mail>,
  "whatsapp": <Point Whatsapp>,
  "latitude": <Location Latitude>,
  "longitude": <Location Longitude>,
  "city": <City>,
  "uf": <Federal Unit - State>,
  "items: <List of item, comma separated of items id>,
  "image": <Image File>
}
```
