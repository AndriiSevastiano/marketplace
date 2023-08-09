export interface IImageService {
    ImageSerialization(img:Buffer,caption: any, entityFolder:string):string
}