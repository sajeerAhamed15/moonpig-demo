import { AllCards, Product, SingleCard } from "../Interfaces/types";

export async function getCardByPage(pageNumber: number) {
  const pageSize = 30;

  const response = await fetch(
    "https://moonpig.github.io/tech-test-frontend/search.json"
  ).then((response) => response.json());

  const data = response as AllCards;
  const allProducts: Product[] = data.Products;

  if (data.NumberOfProducts < pageNumber * pageSize) {
    return [];
  }

  const products: Product[] = allProducts.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );

  return products;
}

export async function getSingleCard(prdNo: string) {
  // return dummyData as SingleCard
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://www.moonpig.com/uk/api/product/product/?mpn=${prdNo}`
  ).then((response) => response.json());

  return response as SingleCard;
}

const dummyData = {
  "Name": "GT006",
  "SizeName": "Standard Card",
  "AvailableSizes": [
    {
      "AvailableSubstrates": null,
      "Category": {
        "Id": 1,
        "Name": "Greeting Cards"
      },
      "Currency": "£",
      "Description": "Lrg",
      "DisplayOrder": 4,
      "Id": 5,
      "Kind": {
        "Category": {
          "Id": 1,
          "Name": "Greeting Cards"
        },
        "Id": 1,
        "Name": "Greeting Card"
      },
      "MinimumBundle": 1,
      "Name": "Large Card",
      "PostageSize": {
        "Id": 2,
        "Name": "Large Letter"
      },
      "Price": 5.99,
      "Weights": {
        "EnvelopeWeight": 24,
        "ItemWeight": 106
      },
      "DisplayName": "Large Card",
      "DefaultNoOfPages": 4,
      "CanPrepay": false
    },
    {
      "AvailableSubstrates": null,
      "Category": {
        "Id": 1,
        "Name": "Greeting Cards"
      },
      "Currency": "£",
      "Description": "XLrg",
      "DisplayOrder": 4,
      "Id": 133,
      "Kind": {
        "Category": {
          "Id": 1,
          "Name": "Greeting Cards"
        },
        "Id": 1,
        "Name": "Greeting Card"
      },
      "MinimumBundle": 1,
      "Name": "Giant Card",
      "PostageSize": {
        "Id": 4,
        "Name": "Packet"
      },
      "Price": 8.99,
      "Weights": {
        "EnvelopeWeight": 0,
        "ItemWeight": 440
      },
      "DisplayName": "Giant Card",
      "DefaultNoOfPages": 4,
      "CanPrepay": false
    },
    {
      "AvailableSubstrates": null,
      "Category": {
        "Id": 1,
        "Name": "Greeting Cards"
      },
      "Currency": "£",
      "Description": "Std",
      "DisplayOrder": 3,
      "Id": 135,
      "Kind": {
        "Category": {
          "Id": 1,
          "Name": "Greeting Cards"
        },
        "Id": 1,
        "Name": "Greeting Card"
      },
      "MinimumBundle": 1,
      "Name": "eCard",
      "PostageSize": {
        "Id": 1,
        "Name": "Letter"
      },
      "Price": 0.99,
      "Weights": {
        "EnvelopeWeight": 8,
        "ItemWeight": 22
      },
      "DisplayName": "eCard",
      "DefaultNoOfPages": 4,
      "CanPrepay": false
    }
  ],
  "Description": "Happy Birthday Beautiful - Photo upload",
  "DesignFeatureTags": [
    "Portrait"
  ],
  "ImageUrls": [
    {
      "ImageNo": 1,
      "ImageUrl": "https://moonpig.github.io/tech-test-frontend/image/gt006/0.jpg"
    },
    {
      "ImageNo": 2,
      "ImageUrl": "https://moonpig.github.io/tech-test-frontend/image/gt006/1.jpg"
    },
    {
      "ImageNo": 3,
      "ImageUrl": "https://moonpig.github.io/tech-test-frontend/image/gt006/2.jpg"
    },
    {
      "ImageNo": 4,
      "ImageUrl": "https://moonpig.github.io/tech-test-frontend/image/gt006/3.jpg"
    }
  ],
  "IsCustomisable": true,
  "Metadata": {
    "Default": false,
    "Quality": 0
  },
  "MoonpigProductNo": "gt006",
  "Pages": [
    {
      "PageNo": 1,
      "Template": {
        "FontColors": null,
        "FontOptions": null,
        "FontSizes": null,
        "Height": 0,
        "Id": 87743,
        "ImageObjects": null,
        "ShapeObjects": null,
        "TextCustomisations": null,
        "TextObjects": null,
        "Width": 0,
        "XBleed": 0,
        "YBleed": 0
      }
    },
    {
      "PageNo": 2,
      "Template": {
        "FontColors": null,
        "FontOptions": null,
        "FontSizes": null,
        "Height": 0,
        "Id": 81489,
        "ImageObjects": null,
        "ShapeObjects": null,
        "TextCustomisations": null,
        "TextObjects": null,
        "Width": 0,
        "XBleed": 0,
        "YBleed": 0
      }
    },
    {
      "PageNo": 3,
      "Template": {
        "FontColors": null,
        "FontOptions": null,
        "FontSizes": null,
        "Height": 0,
        "Id": 81490,
        "ImageObjects": null,
        "ShapeObjects": null,
        "TextCustomisations": null,
        "TextObjects": null,
        "Width": 0,
        "XBleed": 0,
        "YBleed": 0
      }
    },
    {
      "PageNo": 4,
      "Template": {
        "FontColors": null,
        "FontOptions": null,
        "FontSizes": null,
        "Height": 0,
        "Id": 81478,
        "ImageObjects": null,
        "ShapeObjects": null,
        "TextCustomisations": null,
        "TextObjects": null,
        "Width": 0,
        "XBleed": 0,
        "YBleed": 0
      }
    }
  ],
  "ProductCategoryGroup": {
    "Name": "Personalised Cards",
    "PageUrl": "https://www.moonpig.com/uk/personalised-cards",
    "SeoPath": "personalised-cards/"
  },
  "ProductId": "91752",
  "ProductUrl": "https://www.moonpig.com/uk/personalised-cards/birthday-card--graphic-patterns--photo-upload/gt006",
  "RangeId": 19564,
  "Rank": 9999,
  "SeoPath": "birthday-card--graphic-patterns--photo-upload",
  "Size": {
    "AvailableSubstrates": [],
    "Category": {
      "Id": 1,
      "Name": "Greeting Cards"
    },
    "Currency": "£",
    "Description": "Std",
    "DisplayOrder": 3,
    "Id": 1,
    "Kind": {
      "Category": {
        "Id": 1,
        "Name": "Greeting Cards"
      },
      "Id": 1,
      "Name": "Greeting Card"
    },
    "MinimumBundle": 1,
    "Name": "Standard Card",
    "PostageSize": {
      "Id": 1,
      "Name": "Letter"
    },
    "Price": 3.69,
    "Weights": {
      "EnvelopeWeight": 8,
      "ItemWeight": 22
    },
    "DisplayName": "Standard Card",
    "DefaultNoOfPages": 4,
    "CanPrepay": false
  },
  "SoldOut": false,
  "SupplierNo": "GT006",
  "ThumbnailUrl": "https://moonpig.github.io/tech-test-frontend/image/gt006/0.jpg",
  "Title": "Birthday Card - Graphic Patterns - Photo Upload",
  "AdditionalInfo": "Birthday Card - Graphic Patterns - Photo Upload",
  "IsMultipack": false,
  "UndeliverableDates": [],
  "InStock": true,
  "OccasionId": 46,
  "PageCountOverride": null,
  "ProductCategoryId": 1,
  "PublishedOnSite": true,
  "StyleId": 19,
  "SupplierId": 4973
}