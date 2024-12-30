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

## Components

Header
Grid of Images

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
        "id": 29940494,
        "width": 3407,
        "height": 5110,
        "url": "https://www.pexels.com/photo/elegant-fashion-portrait-in-bold-fur-coat-29940494/",
        "photographer": "Janis Dzenis",
        "photographer_url": "https://www.pexels.com/@janis-dzenis-2148060180",
        "photographer_id": 2148060180,
        "avg_color": "#2E353B",
        "src": {
            "original": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg",
            "large2x": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29940494/pexels-photo-29940494.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of artistic portrait, beauty photography, beauty shot"
    },
    {
        "id": 29906517,
        "width": 3864,
        "height": 5520,
        "url": "https://www.pexels.com/photo/elegant-gothic-church-entrance-with-sculptures-29906517/",
        "photographer": "dash dash",
        "photographer_url": "https://www.pexels.com/@dash-dash-2147953268",
        "photographer_id": 2147953268,
        "avg_color": "#6F6353",
        "src": {
            "original": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg",
            "large2x": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29906517/pexels-photo-29906517.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Sunlight illuminates a detailed Gothic church door and archway with intricate sculptures."
    },
    {
        "id": 29914736,
        "width": 4566,
        "height": 3039,
        "url": "https://www.pexels.com/photo/woman-in-park-with-cityscape-in-japan-29914736/",
        "photographer": "Dương Nhân",
        "photographer_url": "https://www.pexels.com/@d-ng-nhan-324384",
        "photographer_id": 324384,
        "avg_color": "#828073",
        "src": {
            "original": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg",
            "large2x": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29914736/pexels-photo-29914736.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 29904625,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/rustic-breakfast-bowls-and-pancakes-in-tulum-29904625/",
        "photographer": "Tiarra Sorte",
        "photographer_url": "https://www.pexels.com/@tiarrasorte",
        "photographer_id": 2147877780,
        "avg_color": "#85735D",
        "src": {
            "original": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg",
            "large2x": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/29904625/pexels-photo-29904625.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Processed with VSCO with a6 preset"
    }
]

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