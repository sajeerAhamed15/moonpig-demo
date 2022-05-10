// I used http://json2ts.com/ to generate TS interfaces from JSON

// Response from https://moonpig.github.io/tech-test-frontend/search.json
export interface AllCards {
    Products: Product[];
    NumberOfProducts: number;
}

export interface Product {
    Price: Price;
    SoldOut: number;
    Title: string;
    ProductCategory: ProductCategory;
    PhotoUploadCount: number;
    CardShopId: number;
    DirectSmile: boolean;
    DefaultSizeId: number;
    ProductId: number;
    MoonpigProductNo: string;
    TradingFaces: number;
    IsLandscape: number;
    ShortDescription: string;
    Description: string;
    IsCustomisable: number;
    IsMultipack: number;
    SeoPath: string;
    ProductCategoryGroupSeoPath: string;
    ProductLink: ProductLink;
    ProductImage: ProductImage;
    Reviews: Reviews;
    AdditionalProductImages: any[];
}

export interface Price {
    Value: number;
    Currency: string;
}

export interface ProductCategory {
    ProductCategoryId: number;
    Name: string;
}

export interface ProductLink {
    Href: string;
    Method: string;
    Rel: string;
    Title: string;
}

export interface Link {
    Href: string;
    Method: string;
    Rel: string;
    Title: string;
}

export interface ProductImage {
    Link: Link;
    MimeType: string;
}

export interface Reviews {
    MinReviewData: number;
    MaxReviewData: number;
    AverageStarReviewRating: number;
    ReviewCount: number;
}

// Response from https://www.moonpig.com/uk/api/product/product/?mpn=pu041d
export interface SingleCard {
    Name: string;
    SizeName: string;
    AvailableSizes: AvailableSize[];
    Description: string;
    DesignFeatureTags: string[];
    ImageUrls: ImageUrl[];
    IsCustomisable: boolean;
    Metadata: Metadata;
    MoonpigProductNo: string;
    Pages: Page[];
    ProductCategoryGroup: ProductCategoryGroup;
    ProductId: string;
    ProductUrl: string;
    RangeId: number;
    Rank: number;
    SeoPath: string;
    Size: Size;
    SoldOut: boolean;
    SupplierNo: string;
    ThumbnailUrl: string;
    Title: string;
    AdditionalInfo: string;
    IsMultipack: boolean;
    UndeliverableDates: any[];
    InStock: boolean;
    OccasionId: number;
    PageCountOverride?: any;
    ProductCategoryId: number;
    PublishedOnSite: boolean;
    StyleId: number;
    SupplierId: number;
}

export interface Category {
    Id: number;
    Name: string;
}

export interface Category2 {
    Id: number;
    Name: string;
}

export interface Kind {
    Category: Category2;
    Id: number;
    Name: string;
}

export interface PostageSize {
    Id: number;
    Name: string;
}

export interface Weights {
    EnvelopeWeight: number;
    ItemWeight: number;
}

export interface AvailableSize {
    AvailableSubstrates?: any;
    Category: Category;
    Currency: string;
    Description: string;
    DisplayOrder: number;
    Id: number;
    Kind: Kind;
    MinimumBundle: number;
    Name: string;
    PostageSize: PostageSize;
    Price: number;
    Weights: Weights;
    DisplayName: string;
    DefaultNoOfPages: number;
    CanPrepay: boolean;
}

export interface ImageUrl {
    ImageNo: number;
    ImageUrl: string;
}

export interface Metadata {
    Default: boolean;
    Quality: number;
}

export interface Template {
    FontColors?: any;
    FontOptions?: any;
    FontSizes?: any;
    Height: number;
    Id: number;
    ImageObjects?: any;
    ShapeObjects?: any;
    TextCustomisations?: any;
    TextObjects?: any;
    Width: number;
    XBleed: number;
    YBleed: number;
}

export interface Page {
    PageNo: number;
    Template: Template;
}

export interface ProductCategoryGroup {
    Name: string;
    PageUrl: string;
    SeoPath: string;
}

export interface Category3 {
    Id: number;
    Name: string;
}

export interface Category4 {
    Id: number;
    Name: string;
}

export interface Kind2 {
    Category: Category4;
    Id: number;
    Name: string;
}

export interface PostageSize2 {
    Id: number;
    Name: string;
}

export interface Weights2 {
    EnvelopeWeight: number;
    ItemWeight: number;
}

export interface Size {
    AvailableSubstrates: any[];
    Category: Category3;
    Currency: string;
    Description: string;
    DisplayOrder: number;
    Id: number;
    Kind: Kind2;
    MinimumBundle: number;
    Name: string;
    PostageSize: PostageSize2;
    Price: number;
    Weights: Weights2;
    DisplayName: string;
    DefaultNoOfPages: number;
    CanPrepay: boolean;
}
