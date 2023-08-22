const axios = require("axios");
module.exports = function (RED) {
    const axios = require('axios');

    /*
    Authentication node functions
    */
    function JEVisRead(config) {
        RED.nodes.createNode(this, config);
        let node = this;
        node.jevisid = config.jevisid;
        node.attribute = config.attribute;
        node.aggregation = config.aggregation;
        node.configuration = RED.nodes.getNode(config.configuration);
        this.on('input', function (msg, send, done) {

            console.log("agg:"+node.aggregation)
            try {
                let from;
                let until;

                let url = node.configuration.host +
                    "/JEWebService/v1/objects/" +
                    node.jevisid + "/attributes/"+
                    node.attribute+
                    "/samples";
                let onlyLast = false;
                console.log("Request data from JEVis ID:" + node.jevisid);
                if (msg.payload != undefined) {
                    if (msg.payload.from == undefined && msg.payload.until == undefined) {

                        onlyLast = true;
                    } else {
                        from = msg.payload.from;
                        until = msg.payload.until

                    }
                } else {
                    onlyLast = true;
                }


                axios({
                    method: 'get',
                    url: url,
                    responseType: "json",
                    auth: {
                        username: node.configuration.credentials.username,
                        password: node.configuration.credentials.password
                    },
                    params: {
                        onlyLatest: onlyLast,
                        from: dateToString(from),
                        until: dateToString(until),
                        ap:node.aggregation
                    }
                }).then(function (response) {
                    console.log(response)
                    node.status({fill: "green", shape: "dot", text: "Successfully Read"});
                    node.send({payload:response.data,topic:node.jevisid});

                }).catch(reason => {
                    node.status({fill: "red", shape: "dot", text: reason});
                    done(reason);
                });
            } catch (e){
                node.status({fill: "red", shape: "dot", text: e});
                done();
            }



        });
    }

    RED.nodes.registerType("JEVis-Read", JEVisRead);
}

function dateToString(dateString) {
    if (dateString != undefined) {
        let date = new Date(dateString);
        let str = new String(date.toISOString());
        str = str.replaceAll("-", "");
        str = str.replaceAll(":", "");
        str = str.toString().substring(0, str.indexOf("."));
        return str;
    } else return null;


}