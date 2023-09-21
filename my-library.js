// my-library.js

const myLibrary = {
  sayHello: function () {
    console.log("Hello from my library");
  },

  mountIframe: function (containerId, userData) {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error("container not found");
      return;
    }

    console.log(userData);
    //create an iframe element
    const iframe = document.createElement("iframe");

    //define the content of the iframe
    const iframeContent = `
        <html>
            <head>
                <title>My Iframe</title>
            </head>
            <body>
                <h1>Your name ${userData}</h1>
            </body>
            </html>
        `;

    // Set the iframe's content
    iframe.srcdoc = iframeContent;
    // Append the iframe to the container
    container.appendChild(iframe);
  },
};
