const kafka = require('kafka-node');
const config = require('../config/config');
const Event = require('../models/Event');

let saveEventToDb = (kafkaMessage) => {

    let tempEvent = {};
    tempEvent.description = kafkaMessage.description;
    tempEvent.location = kafkaMessage.location.latitude + "," + kafkaMessage.location.longitude;
    tempEvent.id = 1;
    tempEvent.title = kafkaMessage.title;
    tempEvent.categories = [{"":""},{"":""}];
    
    let newEvent = new Event(tempEvent);

    newEvent.save()
        .then(newEvent => {
            return res.status(201).json(newEvent);
        })
        .catch(err => {
            return res.status(500).json({
                message: 'error creating event',
                error: err
            });
        })
};

exports.consume = function() {
    console.log('Started consuming topic:', config.kafka_topic);
    try {
        const Consumer = kafka.Consumer;
        const client = new kafka.KafkaClient({kafkaHost:'p4-demo-cluster-kafka-brokers:9092'});
        let consumer = new Consumer(
        client,
        [{ topic: config.kafka_topic, partition: 0 }],
        {
            autoCommit: true,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024,
            encoding: 'utf8',
            fromOffset: false
        }
        );
        consumer.on('message', async function(message) {
            console.log('Received event from topic-> ', message.value);
            saveEventToDb(message.value);
        });
        consumer.on('error', function(err) {
        console.log('error', err);
        });
    }
    catch(e) {
        console.log(e);
    }
}