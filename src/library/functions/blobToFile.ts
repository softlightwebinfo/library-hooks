export const blobToFile = (blob: any, fileName: string) => {
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
};