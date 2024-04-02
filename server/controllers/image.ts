import sizeOf from 'image-size';
import fs from "fs";

const imagePath = 'image300.png'

const getImageByPath = (path: string) => {
    return fs.readFileSync(path)
}

const writeNewImage = (file: Buffer) => {
    console.log(sizeOf(file));
    fs.copyFileSync('image300.png', 'image300x300.png')
}

const rename = () => {
    const file = getImageByPath(imagePath);
    writeNewImage(file);
}

export const ImageController = {
    rename,
}