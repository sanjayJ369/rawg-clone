const GetCropedImageURL = (url : string) => {
    
    if (!url) return "src/assets/noimage.jpg"
    const target = "media/"
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + "crop/600/400/" + url.slice(index, url.length)
}

export default GetCropedImageURL