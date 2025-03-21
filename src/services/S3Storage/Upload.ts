import ReactS3Client from 'react-aws-s3-typescript';

export const uploadFileOnS3 = async (file: File, filename: string) => {
    const s3Config={
        bucketName: process.env.bucketName as string,
        region: process.env.region as string,
        accessKeyId: process.env.accessKeyId as string,
        secretAccessKey: process.env.secretAccessKey as string,
        dirName: process.env.dirName as string,
    }
    // console.log(s3Config);
    
    const s3 = new ReactS3Client(s3Config);
    try {
        const res = await s3.uploadFile(file, filename);
        if(!res) return false
        return res;
    } catch (exception) {
        // console.log(exception);
        return false
    }
}