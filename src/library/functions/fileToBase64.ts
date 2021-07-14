export const fileToBase64 = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e: any) {
        return e.target.result
    };
};