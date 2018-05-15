export default {
  '/': {
    title: 'Home',
    '/vizzes': {
      title: 'List of Vizzes',
      '/:vizid': {
        title: 'A Viz',
        '/chat': {
          title: 'Viz chat'
        }
      }
    },
    '/chat': {
      title: 'Site Chat'
    }
  }
};
