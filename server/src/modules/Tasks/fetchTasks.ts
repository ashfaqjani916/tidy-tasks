import {Request,Response} from 'express';
// const { google } = require('googleapis');
// const fs = require('fs');
// const path = require('path');

// const credentials = JSON.parse(fs.readFileSync(path.join("src", 'credentials.json')));
// const auth = new google.auth.OAuth2();
// auth.setCredentials(credentials);


// const drive = google.drive({ version: 'v3', auth });


export const fetchTasks = async (req: Request, res: Response) => {
//   const fileName = req.params.fileName;

//   try {
//     // Search for the file
//     const response = await drive.files.list({
//       q: `name='${fileName}'`,
//       fields: 'files(id)'
//     });

//     if (response.data.files.length > 0) {
//       // File found, download and send to frontend
//       const fileId = response.data.files[0].id;
//       await drive.files.get({
//         fileId,
//         alt: 'media'
//       }, { responseType: 'stream' }).then((stream: { pipe: (arg0: Response<any, Record<string, any>>) => void; }) => {
//         stream.pipe(res);
//       });
//     } else {
//       // File not found, create a new folder and file
//       const folderMetadata = {
//         name: 'TidyTasks',
//         mimeType: 'application/vnd.google-apps.folder',
//         parents: ['root'] // Replace with parent folder ID if needed
//       };

//       const folderResponse = await drive.files.create({
//         resource: folderMetadata,
//         fields: 'id'
//       });

//       const folderId = folderResponse.data.id;

//       const   
//  fileMetadata = {
//         name: fileName,
//         mimeType: 'text/plain', // Adjust mime type based on your file type
//         parents: [folderId]
//       };

//       const fileContent = 'Initial content'; // Replace with initial content

//       await drive.files.create({
//         resource: fileMetadata,
//         media: {
//           mimeType: 'text/plain', // Adjust mime type based on your file type
//           body: fileContent
//         }
//       });

//       console.log('Folder and file created successfully.');
//       res.status(201).json({ message: 'File created successfully' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
}
