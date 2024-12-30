# Memory Card

## Features

- Score card - max score, current score
- Grid of images same as example

## Concept

Something like Pexels or Giphy is probably simplest to use.

I'll use Pexels.

They have a curated photo option - I will try that. Attribution is important.

Linking back to pexels:

```html
<a href="https://www.pexels.com">Photos provided by Pexels</a>

<!-- or show our white logo -->

<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels-white.png" />
</a>

<!-- or show our black logo -->

<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels.png" />
</a>
```

Linking to a photo:

```html
This <a href="https://www.pexels.com/photo/food-dinner-lunch-meal-4147875">Photo</a> was taken by <a href="https://www.pexels.com/@daria">Daria</a> on Pexels.
```

## API

https://api.pexels.com/v1/curated?page=1&per_page=5

Example of result.photos

URL:
result.photos[0].src.small

Photographer:
result.photos[0].photographer
result.photos[0].photographer_url

[
    {
        "id": 29944187,
        "width": 3648,
        "height": 5472,
        "url": "https://www.pexels.com/photo/foggy-chicago-skyline-with-iconic-skyscrapers-29944187/",
        "photographer": "Willian Justen de Vasconcellos",
        "photographer_url": "https://www.pexels.com/@willianjusten",
        "photographer_id": 259049,
        "avg_color": "#878B8E",
        "src": {
            "original": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg",
            "large2x": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29944187/pexels-photo-29944187.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
    ...
    }
]

## Components

Header:

```txt
+-----------------------+
|                       |
|     MEMORY CARDS      |
|                       |
| Click each image once |
|                       |
|       Score: 2        |
|      Target: 10       |
|  High score: 8        |
|                       |
| ...                   |

+-----------------------------------------------+
|                                               |
|     MEMORY CARDS                Score: 2      |
|                                Target: 10     |
|  Click each image once     High score: 8      |
|                                               |
| ...                                           |

```

Card:

```txt
+=======================+
|                       |
|                       |
|                       |
|                       |
|     PHOTO             |
|                       |
|                       |
|                       |
|                       |
|                       |
|                       |
| foggy chicago skyline |
|      photographer     |
+=======================+

```