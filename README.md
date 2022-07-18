# absolver-api

Hello! This is the officially unofficial Absolver moveset API.
It includes move data for Absolver, as well as Absolver Plus, a community mod.

## Usage

This API is a statically hosted set of `json` formatted files. You can access them in a few ways, in bulk or individually

### Vanilla Absolver

To access vanilla absolver move data, simply make a `GET` request to `api.absolver.dev/{move-name}`
e.g. to request "Axe Kick", you need to simply `kebab-case` the move name and append it to the API URL.

**You may also get every barehands and sword move at the following URLS**
- Barehands: `https://api.absolver.dev/barehands.json`
- Sword: `https://api.absolver.dev/sword.json`

```js
// Axe kick
fetch("https://api.absolver.dev/axe-kick.json")

// 360 Tornado Kick
fetch("https://api.absolver.dev/360-tornado-kick.json")
```

### Absolver Plus

Being that Absolver Plus changes a lot of move data, you can access updated values by the same method above, the only difference being that you add `/plus` to the path

**You may also get every barehands and sword move for Absolver PLUS here**
- Barehands: `https://api.absolver.dev/plus/barehands.json`
- Sword: `https://api.absolver.dev/plus/sword.json`

```js
// Bounce Knee (Plus version)
fetch("https://api.absolver.dev/plus/bounce-knee.json");
```

The result of these calls will be statically served JSON.

## Data Shape

This data follows the shape first Authored by Morklympious for the [Absolver Deck Editor](https://absolver.dev) Web application.
For example, here's what calbot looks like.

Everything should be self explanatory, and the `stance` key / values give key/value pairs for `STARTING_QUADRANT: ENDING_QUADRANT`. Sword is different since some moves are not available due to every absolver holding sword in their right hand. 

This is why calbot can "only" be slotted in the front left.

```json
{
    "name": "Calbot",
    "style": "forsaken",
    "stance": {
        "barehands": {
            "FRONT_RIGHT": "FRONT_LEFT",
            "FRONT_LEFT": "FRONT_RIGHT"
        },
        "sword": {
            "FRONT_LEFT": "FRONT_RIGHT"
        }
    },
    "hits": "same",
    "height": "high",
    "type": "horizontal",
    "frames": {
        "startup": 13,
        "advantage": {
            "hit": 4,
            "guard": 1
        }
    },
    "modifiers": []
}
```

## Limitations / Known Issues / Things to do next

1. Absolver Plus move data currently does not support "driving palm" and "reverse elbow strike", the two moves added to Absolver plus for barehands.
2. This might not be the final shape of data, but it'll work for now!
3. Move data does not contain image files or image file URLs

Thanks for reading! And reach out to me on discord if you have any questions!