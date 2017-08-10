export default ({ body, title, initialState }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" href="/assets/index.css" />
                <script>window.__INITIAL_STATE__=${initialState}</script>
            </head>
            <body>
                <div id="root">${body}</div>
            </body>
            <script src="/assets/bundle.js"></script>
        </html>
    `
}