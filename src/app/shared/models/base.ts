export interface BaseResponse<T> {
    success : boolean,
    errorMessage? : string,
    data : T
}