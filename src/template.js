export default function template(title, content = "") {
  let scripts = '';
  if (content) {
    scripts = ` <script>      
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" type="text/css" href="assets/styles.css">
              </head>
              <body>
                <div class="content">
                   <div id="ow-app" class="ow-app">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;

  return page;
}