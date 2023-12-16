

export const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export const downloadMedia = (e, originImage) => {
    e.preventDefault();

    try {
        fetch(originImage)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = "none";
            a.href = url;

            const nameSplit = originImage.split("/");
            const duplicateName = nameSplit.pop();

            a.download = "" + duplicateName + "";

            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(error => console.log('error while downloading the image', error.message));
    } catch (error) {
        console.log('error while downloading the image', error.message);
    }
}