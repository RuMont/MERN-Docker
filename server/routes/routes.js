const express = require('express');
const db = require('../db/conn');
var { ObjectId } = require('mongodb');

const router = express.Router();

//GET
router.route('/tasks').get(async function (_req, res) {
    const dbConnect = db.getDb();

    dbConnect.collection('tasks')
        .find({})
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error at fetching data');
            } else {
                res.json(result);
            }
        });
});

//INSERT
router.route('/insert').post(function (req, res) {
    const dbConnect = db.getDb();
    const task = {
        name: req.body.name,
        task: req.body.task,
        isCompleted: false
    }

    dbConnect
        .collection('tasks')
        .insertOne(task, (err, result) => {
            if (err) {
                res.status(400).send('Error inserting a task');
            } else {
                console.log(`[INSERT]: ${task.name}: ${task.task}`);
                res.status(204).send();
            }
        });
});

//DELETE
router.route('/delete/:id').delete((req, res) => {
    const dbConnect = db.getDb();

    dbConnect
        .collection('tasks')
        .deleteOne({ _id: new ObjectId(req.params.id) }, (err, _result) => {
            if (err) {
                res
                    .status(400)
                    .send(`Error deleting task with id ${req.params.id}!`);
            } else {
                console.log('[DELETE] on id: ' + req.params.id);
            }
        })
})

//UPDATE
router.route('/update').post((req, res) => {
    const dbConnect = db.getDb();
    
    dbConnect
        .collection('tasks')
        .updateOne({ _id: new ObjectId(req.body._id) },
            { $set: {name: req.body.name, task: req.body.task} },
            (err, _result) => {
                if (err) {
                    res
                        .status(400)
                        .send(`Error updating task with id ${req.body._id}`)
                } else {
                    console.log('[UPDATE] on id: ' + req.body._id);
                }
            })

})

module.exports = router;