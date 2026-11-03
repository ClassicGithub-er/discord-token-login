function login(token) {
  setInterval(() => {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.contentWindow.localStorage.token = `"${token}"`;
  }, 50);
  setTimeout(() => {
    location.reload();
  }, 2500);
}
login('NzMzMDcwNjEwODgzNjc0MTcy.Xw9zTw.k-Pq7pSbYfAadNZG87BxbqZ1nA8');
// Enter your Discord token here ^ (replace the example)
