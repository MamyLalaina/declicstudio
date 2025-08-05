'use server'


// // pages/api/getFileContent.js
// 'use server'
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//     // Chemin du fichier à lire
//     const filePath = path.join(process.cwd(), 'chemin/vers/le/fichier.txt');

//     // Lecture du fichier
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Erreur lors de la lecture du fichier : ', err);
//             res.status(500).json({ error: 'Erreur lors de la lecture du fichier' });
//             return;
//         }

//         // Envoi du contenu du fichier au client
//         res.status(200).json({ content: data });
//     });
// }


// pages/api/listeFichiers.js

import fs from 'fs';
import path from 'path';

export async function GET() {
    const dossier = './public/'; // Chemin vers le dossier contenant les fichiers
    const fichiers = fs.readdirSync(path.join(process.cwd(), dossier));
  
    return Response.json({ fichiers })
  
}
