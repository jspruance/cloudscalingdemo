var express = require('express');
var router = express.Router();

/* GET exp layer status */
router.get('/', function (req, res) {
    res.json({"cluster_name":"_hzInstance_1_dev","cluster_size":2,"free_memory":151323272,"cluster_members":"[Member [172.31.37.63]:5701 - 1d7d270d-dc15-4164-8fb7-03237c2c8fee, Member [172.31.17.138]:5701 - 4e0d5288-b649-4275-a537-f1bd31cfd4db this]","cluster_state":"ACTIVE","map_size":17026});
});

module.exports = router;