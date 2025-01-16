// uploadFileToS3.js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = process.env.BUCKET_NAME;
    const fileName = event.fileName;
    const fileContent = Buffer.from(event.fileContent, 'base64');

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent,
        ContentType: 'application/pdf',
        ACL: 'private'
    };

    try {
        const data = await s3.upload(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully', data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error uploading file', error: error.message })
        };
    }
};
