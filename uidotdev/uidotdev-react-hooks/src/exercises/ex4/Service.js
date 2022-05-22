export const subscribe = (username, callback) => {
    const interval =setInterval(()=>{
        callback({
            username,
            info: `Some info about ${username}`
          });
        }, 2000);

    return () => clearInterval(interval);

}