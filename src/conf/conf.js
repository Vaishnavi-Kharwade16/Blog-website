const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDataBaseID: String(import.meta.env.VITE_DATABASE_ID),
    
    appwriteCollectionID: String(import.meta.env.VITE_COLLECTION_ID ),
        appwriteBucketID: String(import.meta.env.VITE_BUCKET_ID ),
};

console.log("ENV CHECK:", import.meta.env.VITE_APPWRITE_URL);
export default conf;