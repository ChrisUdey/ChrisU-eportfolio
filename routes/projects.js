/**
 * router for path: http://localhost:3000/projects/
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="/bw/vapor/bootstrap.css"></link>
            </head>
        <body class="container">
         <h1>Projects</h1>
         <ul>
             <li>
             <a href="/projects/project-layout">Project Page</a>
            </li>
        </ul>
        </body> 
        </html>
    
    `);
})

router.get('/project-layout', (req, res) => {



    res.render('project-layout', {
        title: 'Projects',
        guest: 'You',
        myName: "Chris Udey"
    });


})


module.exports = router;