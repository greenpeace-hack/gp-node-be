'use strict';

module.exports = {
    kafka_topic: process.env.TOPIC || 'common',
    kafka_server: process.env.KAFKA_HOST || 'p4-demo-cluster-kafka-brokers:9092',
    mongo_conn: process.env.MONGO_CONN_URL || 'mongodb://user0F7:thxT4ONFxeKYGSjb@mongodb.p4-demo.svc:27017/sampledb'
  };