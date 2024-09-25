export default interface NewPostDTO {
    aoutorId: string,
    content:  string,
    hashtags: string[],
    ref?:     string
}