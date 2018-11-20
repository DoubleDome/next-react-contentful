const Router = require('nextjs-dynamic-routes');

const router = new Router();

router.add({name: 'index', pattern: '/'});
router.add({name: 'room-detail', pattern: '/:id'});

module.exports = router;