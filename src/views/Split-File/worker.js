import FileHelper from "../../libraries/FileHelper";

onmessage = async e => {
    const fileHelper = FileHelper();
    const {file, CHUNK_SIZE, start, end} = e.data;
    const result = [];

    for ( let i = start; i < end; i++) {
        const prom = fileHelper.createChunk(file, i, CHUNK_SIZE);
        result.push(prom);
    }

    const chunks = await Promise.all(result);
    postMessage(chunks);
}