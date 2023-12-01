{
  let socket;

  const init = () => {
    socket = io.connect('/');

    socket.on('connect', () => {
      console.log('Socket connected', socket.id);
    });
  }

  init();
}
