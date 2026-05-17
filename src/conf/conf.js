// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDataBaseID: String(import.meta.env.VITE_DATABASE_ID),
    
//     appwriteCollectionID: String(import.meta.env.VITE_COLLECTION_ID ),
//         appwriteBucketID: String(import.meta.env.VITE_BUCKET_ID ),
// };

// console.log("ENV CHECK:", import.meta.env.VITE_APPWRITE_URL);
// export default conf;




// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDataBaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// };

// export default conf;




// console.log("FULL ENV:", import.meta.env);

// const conf = {
//   appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
//   appwriteProjectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   appwriteDataBaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   appwriteCollectionID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
//   appwriteBucketID: import.meta.env.VITE_APPWRITE_BUCKET_ID,
// };

// console.log("CONF:", conf);

// export default conf;



const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default conf;