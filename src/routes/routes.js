const Router = require('nextjs-dynamic-routes');

const router = new Router();

router.add({name: 'index', pattern: '/'});
router.add({name: 'room-detail', pattern: '/room-detail/:id'});

module.exports = router;