export enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export interface Image {
    thumb: string;
    original: string;
    width : number;
    height : number;
}

export interface Video {
    thumb: string;
    original: string;
    width : number;
    height : number;
    duration : number;
}

export interface Sticker {
    id: number;
    url: string;
}

export interface Coupon {
    id: number;
    startDate: number;
    endDate: number;
    status: Status;
    title: string;
    thumbnail : string;
}

export interface Link {
    url: string; // https://line.me
    title: string; // "LINE : Free Calls & Messages",
    desc: string; // "LINE is a new communication app which allows you to make FREE voice calls and send FREE messages whenever and wherever you are, 24 hours a day!",
    thumbnail: string;
}

export interface Survey {
    id: number;
    startDate: number;
    endDate: number;
    status: Status;
    title: string;
    thumbnail : string;
}

export enum PostStatus {
    DRAFTED = 'DRAFTED',
    PUBLISHED = 'PUBLISHED',
}

export enum PostType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    STICKER = 'STICKER',
    COUPON = 'COUPON',
    LINK = 'LINK',
    SURVEY = 'SURVEY',
}

export interface Post {
    id: number;
    type: PostType;
    status: PostStatus;
    scheduledTime?: number;
    images?: Image[];
    video?: Video;
    sticker?: Sticker;
    coupon?: Coupon;
    link?: Link;
    survey?: Survey;
    createdAt: number;
    updatedAt: number;
}

export interface PostResponse {
    resultCode: number; // 1: success, 0: failed
    resultData: Post;
    errorDisplay: boolean;
    errorMessage: string;
}
